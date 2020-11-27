//SPDX-License-Identifier: MIT

//docs.openzeppelin.com/contracts/2.x/crowdsales
//copy & paste below then update

// contract MyToken is ERC20, ERC20Mintable {
//     // ... see "Tokens" for more info
// }

// contract MyCrowdsale is Crowdsale, MintedCrowdsale {
//     constructor(
//         uint256 rate,    // rate in TKNbits
//         address payable wallet,
//         IERC20 token
//     )
//         MintedCrowdsale()
//         Crowdsale(rate, wallet, token)
//         public
//     {

//     }
// }

pragma solidity ^0.6.2;
import "./Crowdsale.sol";
contract MyTokenSale is Crowdsale {
    constructor(
        uint256 rate,    // rate in TKNbits
        address payable wallet,
        IERC20 token
    )
        Crowdsale(rate, wallet, token)
        public
    {

    }
}
