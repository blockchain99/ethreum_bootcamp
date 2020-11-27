pragma solidity ^0.5.13;

contract SendMoneyExample {
    
    //send ether money from an account to this smart contract
    function receiveMoney() public payable {
       
    }
    
    //balance of this(this smart contract)'s address
    function getBalance() public view returns(uint) {
        return address(this).balance;
    }
}