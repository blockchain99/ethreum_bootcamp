pragma solidity ^0.6.0;
//instead of Ctrl+P / select 0.6.0 -> truffle-confg.js / 
// compilers : { solc : { version: 0.6.0 } }

import "./Ownable.sol";
import "./Item.sol";
contract ItemManager is Ownable {
    
    enum SupplyChainSteps{Created, Paid, Delivered}
    
    struct S_Item {
        Item _item;
        string _identifier;
        uint _priceInWei;
        ItemManager.SupplyChainSteps _state;
    }
    
    mapping(uint => S_Item) public items;
    
    uint itemIndex;
    
    event SupplyChainStep(uint _itemIndex, uint _step, address _itemAddress);
    
    function createItem(string memory _identifier, uint _priceInWei) public onlyOwner {
        //this: instance of ItemManager, ... <- constructor(Item..., uint, uint)
        Item item = new Item(this, _priceInWei, itemIndex);
        items[itemIndex]._item = item;
        items[itemIndex]._priceInWei = _priceInWei;
        items[itemIndex]._state = SupplyChainSteps.Created;
        items[itemIndex]._identifier = _identifier;
        // emit SupplyChainStep(itemIndex, uint(items[itemIndex]._state), address(items[itemIndex]._item));
        emit SupplyChainStep(itemIndex, uint(items[itemIndex]._state), address(item));
        itemIndex++;
    }
    
    //NEED to input VALUE : 1000 wei to solve error: Not fully paid Error in left DEPLOY & RUN Panel.
    //NEED to be create _state, which is 0 to triggerpayment for itemIndex 0.
    function triggerPayment(uint _itemIndex) public payable onlyOwner {
        require(items[_itemIndex]._priceInWei <= msg.value, "Not fully paid");
        require(items[_itemIndex]._state == SupplyChainSteps.Created, "Item is further in the supply chain");
        items[_itemIndex]._state = SupplyChainSteps.Paid;
        emit SupplyChainStep(_itemIndex, uint(items[_itemIndex]._state), address(items[itemIndex]._item));
    }
    
    function triggerDelivery(uint _itemIndex) public {
        require(items[_itemIndex]._state == SupplyChainSteps.Paid, "Item is further in the supply chain");
        items[_itemIndex]._state = SupplyChainSteps.Delivered;
        emit SupplyChainStep(_itemIndex, uint(items[_itemIndex]._state), address(items[itemIndex]._item));
    }
    
    function getContractAddress() public view returns(address) {
        return address(this);
    }
}
