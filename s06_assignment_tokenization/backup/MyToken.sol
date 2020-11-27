
// If you’re using the ERC20 or ERC721 tokens however, 
// you’ll have to remove all references to optional extensions 
// ( ERC20Detailed , ERC721Enumerable , etc.) - these have been included in the base contracts.
pragma solidity 0.6.1;

import "../openzeppelin3.0.0/contracts/token/ERC20/ERC20.sol";
// import "../openzeppelin3.0.0/contracts/token/ERC20/ERC20Detailed.sol";
import "../openzeppelin2.5.0/contracts/token/ERC20/ERC20Mintable.sol";

// contract MyToken is ERC20, ERC20Detailed {
contract MyToken is ERC20 {

    // constructor(uint256 initialSupply) ERC20Detailed("StarDucks Cappucino Token", "CAPPU", 0) public {
    constructor(uint256 initialSupply) ERC20 ERC20Mintable ("StarDucks Cappucino Token", "CAPPU", 0) public {
        _mint(msg.sender, initialSupply);
    }
}