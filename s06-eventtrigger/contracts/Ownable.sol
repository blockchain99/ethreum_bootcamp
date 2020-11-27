pragma solidity ^0.6.0;
// pragma solidity >=0.4.21 <0.7.0;

contract Ownable {
    address payable _owner;
   //Constructor functions can be either public or internal. 
   //If there is no constructor, the contract will assume the default constructor: contructor() public {}. 
    constructor() public {
        _owner = msg.sender;
    }
    
    // modifier onlyOwner() {
    //     require( msg.sender == _owner, "Ownable: caller is not the owner");
    //     _;
    // }
    
      modifier onlyOwner() {
        require( isOwner(), "Ownable: caller is not the owner");
        _;
    }
    
    function isOwner() public view returns(bool) {
        return (msg.sender == _owner);
    }
}
// MetaMask - RPC Error: Error: [ethjs-query] while formatting outputs from RPC 