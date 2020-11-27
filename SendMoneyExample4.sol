pragma solidity ^0.5.13;
//address has  a couple of  function: transfer(amount_of_money_to_transfer), 
//1. VALUE : 1 ether , click receiveMoney - balanceReceived, getBalance -> same : 1, original Account decreased by 1 ether
//2. pretend  to be another person- change Account- withdrawMoney click
//-> balanceReceived: same but getBalance: changed to 0 , another Account is  100.9999 ether(increasedd by 1 ether)

contract SendMoneyExample {
    
    uint public balanceReceived;
    
    //global variable msg.value
    //send ether money from an account to this smart contract
    function receiveMoney() public payable {
        balanceReceived += msg.value;
    }
    
    //balance of this(this smart contract)'s address
    function getBalance() public view returns(uint) {
        return address(this).balance;
    }
    
    //if we want to send money to this address : payable
    //msg.sender is the address to call this smart contract
    
    //another Acccount (this address) : increased by 1 in ACCOUNT section.
    //since  balanceReceived(1 ether) is  transfered to another Account
    //-> getBalance is 0(balance of  this smartcontract is 0)
    function withdrawMoney() public {
        address payable to = msg.sender;
        to.transfer(this.getBalance());
        
    }
    
    //where is  the money to, function with variable
    
    // Value : 1 ether, then click receiveMoney 
    //->  balanceReceived, getBalance : 1 ether
    
    
    //copy 3rd Account address & past it to withdrawMoneyTo input panel
    //& switch back to original Account, then click withdrawMoneyTo 
    //->  3rd Account: 101 ether(increased by 1)
    //->  1st Account: 98.999(decreased by 1)
    
    function withdrawMoneyTo(address payable _to) public {
        _to.transfer(this.getBalance());
    }
}