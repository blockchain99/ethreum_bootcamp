// SPDX-License-Identifier: MIT

// One of OST KYC's services is the Ethereum address whitelisting, 
// designed for clients who want to verify their ICO participants with OST KYC. 

// It ensures that the deposit address of the ICO client 
// will be able to receive funds only from Ethereum addresses that 
// have been whitelisted in the ICO's smart contract.

// In this program, Just mockup for a larger KYC solution,
// which will just whitelist addresses by the admin of the system.

// in our TokenSale.sol we have to check – before the actual sale – if the user is whitelisted.
pragma solidity ^0.6.2;

import "../openzeppelin3.2.0/contracts/access/Ownable.sol";

contract KycContract is Ownable {
    mapping(address => bool) allowed;
    function setKycCompleted(address _addr) public onlyOwner {
        allowed[_addr] = true;
    }
    function setKycRevoked(address _addr) public onlyOwner {
        allowed[_addr] = false;
    }
    function kycCompleted(address _addr) public view returns(bool) {
        return allowed[_addr];
    }
}