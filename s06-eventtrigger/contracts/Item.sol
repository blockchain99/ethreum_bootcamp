pragma solidity ^0.6.0;

import "./ItemManager.sol";
contract Item{
    uint public priceInWei;
    uint public pricePaid;
    uint public index;
    
    ItemManager parentContract;
    
    constructor(ItemManager _parentContract, uint _priceInWei, uint _index) public {
        priceInWei = _priceInWei;
        index = _index;
        parentContract = _parentContract;
    }
    
    //when receive the money , we send it back to ItemManager: in remix, DEPLOY & RUN transaction, type in VALUE same as public priceInWei.
    receive() external payable {
        require(pricePaid  == 0, "Item is paid already");
        require(priceInWei == msg.value, "Only full payments allowed");
        pricePaid += msg.value;
        // address(parentContract).transfer(msg.value); //need more gas, so use low level function(when wrong, no throw exception but bool)
        //we can use call.vaule
        
        (bool success, ) = address(parentContract).call.value(msg.value)(abi.encodeWithSignature("triggerPayment(uint256)", index));
        // someAddress.call{value: 1 ether}(abi.encodeWithSignature("someFunction(uint256)", _arg1))  //0.6.6 version 
        // (bool success, ) = address(parentContract).call{value: msg.value}(abi.encodeWithSignature("triggerPayment(uint256)", index));
        
        require(success, "The transaction wasn't successful, cancelling");
    }
    //Unless fallback function, can't interact with buttons
    fallback () external {
        
    }
}
