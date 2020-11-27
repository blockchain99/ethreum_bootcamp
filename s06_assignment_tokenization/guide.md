FINAL COURSE ASSIGNMENT
Assignment Instructions

In this assignment you are required to change our Fixed Supply token to a Mintable token, so that there is no upper limit to the Total Supply. Essentially, it should be possible to integrate the following logic in Solidity 0.6, although openzeppelin removed the functionality in openzeppelin v3: https://docs.openzeppelin.com/contracts/2.x/crowdsales#minted-crowdsale



Preparation:

1. Download the attached zip file and extract the containing the project folder

2. open the terminal/PowerShell in the root and type in "npm install"

3. cd into the client directory and "npm install" as well



For the assignment follow these steps:

1. Bring the ERC20Mintable Token from OpenZeppelin 2.5 to Solidity 0.6:

https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v2.5.0/contracts/token/ERC20/ERC20Mintable.sol

That means also to bring over the MinterRole from OpenZeppelin 2.5 to Solidity 0.6. Follow the Import Statements for this.

2. Bring the MintedCrowdsale over to Solidity 0.6:

https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v2.5.0/contracts/crowdsale/emission/MintedCrowdsale.sol

3. Adapt the Migrations from your Truffle File so that the Crowdsale Smart Contract becomes the MinterRole

4. Remove the InitialSupply, because Tokens are minted on the fly

5. Add the Current Total Supply to the Website

6. Deploy the Smart Contracts using Infura to the Ropsten or Görli Test-Net

7. Post your TokenSale Address to the Facebook Group - I'd be delighted to test it :)

8. (optional) Upload your Website to GitHub Pages so that Smart Contract interaction is possible via the Website https://pages.github.com/


============= I did below instead of above explanation. 
After this, enjoy your certificate and add me on LinkedIn so I can endorse your for Blockchain Development Knowledge!
$ mkdir s06_assignment_tokenization
$ cd s06_assignment_tokenization
s06_assignment_tokenization$ truffle unbox react
* s06_assignment_tokenization$ npm install --save dotenv
*    ------------I installed globally ------> It works!!
   ys:~$ npm install -g --save @openzeppelin/contracts@v3.0.0

   s06_assignment_tokenization$ npm install --save chai chai-bn chai-as-promised``
   * npm install --save @truffle/hdwallet-provider

   ========
   *  in Address.sol ParserError: Expected ';' but got '{'
        ``(bool success, ) = recipient.call{ value: amount }("");``
        ->  ParserError: Expected ';' but got '{'
         ``(bool success, ) = recipient.call{ value: amount }(""); ``//0.6.2 -> error! 

        (bool success, ) = recipient.call.value(amount)(""); //0.6.1
   The reason the compilation stopped working is 
   because that way of performing a call was only made available in Solidity 0.6.2:
   -> Prior to 0.6.2, you had to use c.gas(_gasLimit).value(_value)(_data);
   0.6.2 -> need " abstract "
   [solidity0.5vs 0.6](https://vomtom.at/solidity-0-6-0-breaking-changes-hands-on-walkthrough/)

   [Where is ERC20Mintable.sol in OpenZeppelin Contracts 3.0](https://forum.openzeppelin.com/t/where-is-erc20mintable-sol-in-openzeppelin-contracts-3-0/2283/9)
   - V3 doesn’t include ERC20Mintable because the core contracts were made less opinionated: you get the internal _mint function in ERC20 and you can expose it as an external function however you want. This grew out of a feeling that basic contracts like v2’s ERC20Mintable can be inadequate when a project grows, and it’s also related to the fact that we introduced the more feature-complete AccessControl but we didn’t want to force everyone to use it. To balance this out, we introduced the “preset” contracts that piece together the different components in an opinionated way to provide ready to use contracts. So I’m glad to hear that worked for you.
   [OpenZeppelin Contracts v3.0 release](https://forum.openzeppelin.com/t/openzeppelin-contracts-v3-0/2695)