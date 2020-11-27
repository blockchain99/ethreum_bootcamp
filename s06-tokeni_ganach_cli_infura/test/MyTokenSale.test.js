//github.com/domenic/chai-as-promised
//using "truffle development> test" - not ganache 
const Token = artifacts.require("MyToken");
const TokenSale = artifacts.require("MyTokenSale");
const KycContract = artifacts.require("KycContract");

const chai = require("./chaisetup.js");
const BN = web3.utils.BN;
const expect = chai.expect;

// //Error
// contract("TokenSale Test", async (accounts) => {
//     const [ initialHolder, recipient, anotherAccount ] = accounts;

// it("should not have any tokens in my initialHolder account", async () => {
//     let instance = Token.deployed();
//     return expect(instance.balanceOf.call(initialHolder)).to.eventually.be.a.bignumber.equal(new BN(0));
//    });

// });

//truffle(develop)>test ./test/MyTokenSale.test.js - Problem is: this won’t work out of
// the box for two reasons. 1. The shared Chai setup and 2. The missing return
// statements in the previous smart contract.

//with await Token.deployed() -> need .balanceOf.call(..)
contract("TokenSale", async function(accounts) {
    const [ initialHolder, recipient, anotherAccount ] = accounts;

    it("there shouldnt be any coins in my account", async () => {
        let instance = await Token.deployed();
        // let instance = Token.deployed(); // TypeError: instance.balanceOf is not a function


        // //same result with below 2 lines
        // return expect(instance.balanceOf.call(initialHolder)).to.eventually.be.a.bignumber.equal(new BN(0));
        return expect(instance.balanceOf(initialHolder)).to.eventually.be.a.bignumber.equal(new BN(0));
    });
    
    it ("all coins should be in the tokensale smart contract", async () => {
        let instance = await Token.deployed();
        let balance = await instance.balanceOf.call(TokenSale.address);
        let totalSupply = await instance.totalSupply.call();
        return expect(balance).to.be.a.bignumber.equal(totalSupply);
    });

    it("should be possible to buy one token by simply sending ether to the smart contract", async () => {
        let tokenInstance = await Token.deployed();
        let tokenSaleInstance = await TokenSale.deployed();
        let balanceBeforeAccount = await tokenInstance.balanceOf.call(recipient);

        expect(tokenInstance.sendTransaction({from: recipient, value: web3.utils.toWei("1", 
        "wei")})).to.be.rejected;
        expect(balanceBeforeAccount).to.be.bignumber.equal(await tokenInstance.balanceOf.call(recipient));

        let kycInstance = await KycContract.deployed();
        await kycInstance.setKycCompleted(recipient);

        expect(tokenSaleInstance.sendTransaction({from: recipient, value: web3.utils.toWei("1",
        "wei")})).to.be.fulfilled;
        return expect(balanceBeforeAccount + 1).to.be.bignumber.equal(await tokenInstance.balanceOf.call(recipient));
    });

});

//     //It works in "truffle  develop> test testfile_name.js"