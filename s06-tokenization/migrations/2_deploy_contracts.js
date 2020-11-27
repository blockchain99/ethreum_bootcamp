var MyToken = artifacts.require("./MyToken.sol");
// var MyTokenSale = artifacts.require("./MyTokenSale.sol"); //same as below
var MyTokenSale = artifacts.require("./MyTokenSale");
require("dotenv").config({path: "../.env"});
console.log(process.env);

module.exports = async function(deployer) {
  let AccountAddress = await web3.eth.getAccounts();
  // await deployer.deploy(MyToken, 1000000000);
  await deployer.deploy(MyToken, process.env.INITIAL_TOKENS);

  //MyToken.address : smart contract address from MyToken
  await deployer.deploy(MyTokenSale, 1, AccountAddress[0], MyToken.address);

  //sending money from addr[0]-token creator to MyTokenSale address
  let instance = await MyToken.deployed();

  // transfer(address recipient, uint256 amount)
  await instance.transfer(MyTokenSale.address, 100000);
};