//github.com/domenic/chai-as-promised
//using "truffle development> test" - not ganache 
const TokenSale = artifacts.require("MyTokenSale");
const Token = artifacts.require("MyToken");

var chai = require("chai");

const BN = web3.utils.BN;
const chaiBN = require('chai-bn')(BN);
chai.use(chaiBN);

var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const expect = chai.expect;

require("dotenv").config({path: "../.env"});

// contract("Token Test", async accounts => { //same as below
contract("TokenSale Test", async (accounts) => {

    const [ initialHolder, recipient, anotherAccount ] = accounts;


    //It works in "truffle  develop> test testfile_name.js"
it("should not have any tokens in my initialHolder account", async () => {
    let instance = Token.deployed();
    expect(instance.balanceOf(initialHolder)).to.eventually.be.a.bignumber.equal(new BN(0));
   });

});