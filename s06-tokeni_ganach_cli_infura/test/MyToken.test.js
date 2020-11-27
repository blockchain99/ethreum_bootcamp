//github.com/domenic/chai-as-promised
//using "truffle development> test" - not ganache 
//truffle(develop)>  test ./test/MyToken.test.js (when multiple X.test.js in test dir)
const Token = artifacts.require("MyToken");

const chai = require("./chaisetup.js");
const BN = web3.utils.BN;
const expect = chai.expect;

// Dotenv is a zero-dependency module that loads environment variables
//  from a .env file into process.env: $ npm install dotenv
require('dotenv').config({path: '../.env'});

// contract("Token Test", async accounts => { //same as below
contract("Token Test", async (accounts) => {

    const [ initialHolder, recipient, anotherAccount ] = accounts;

    //hook into Unit test suit every time test runs.
    beforeEach(async () => {
        this.myToken = await Token.new(process.env.INITIAL_TOKENS);
        });

    //It works in "truffle  develop> test"
it("All tokens should be in my account", async () => {
    let instance = this.myToken;
    let totalSupply = await instance.totalSupply();
//old style2 : not working
//let balance = await instance.balanceOf.call(initialHolder);
// assert.equal(balance.valueOf(), 0, "Account 1 has a balance");

//old style1 : not working
// let balance = await instance.balanceOf(accounts[0]);
// assert.equal(balance, initialHolder.valueOf());

//condensed, easier readable style with await 1:
// expect(await instance.balanceOf(initialHolder)).to.be.a.bignumber.equal(totalSupply);

//condensed, easier readable style with eventually 2:
return expect(instance.balanceOf(initialHolder)).to.eventually.be.a.bignumber.equal(totalSupply);
   });

it("is possible to send tokens between accounts", async() => {
    const sendTokens = 1;
    let instance = this.myToken;
    let totalSupply = await instance.totalSupply();
    expect(instance.balanceOf(initialHolder)).to.eventually.be.a.bignumber.equal(totalSupply);
    expect(instance.transfer(recipient, sendTokens)).to.eventually.be.fulfilled;
    //  TypeError: Cannot create property 'negative' on number '1'
    // expect(instance.balanceOf(initialHolder)).to.eventually.be.a.bignumber.equal(totalSupply.sub(sendTokens)); 
    expect(instance.balanceOf(initialHolder)).to.eventually.be.a.bignumber.equal(totalSupply.sub(new BN(sendTokens))); 
    return expect(instance.balanceOf(recipient)).to.eventually.be.a.bignumber.equal(new BN(sendTokens));
});

it("is possible to send more tokens than available in total", async() => {
    let instance = this.myToken;
    let balanceOfInitialHolder = await instance.balanceOf(initialHolder);

    expect(instance.transfer(recipient, new BN(balanceOfInitialHolder + 1))).to.eventually.be.rejected;
    return expect(instance.balanceOf(initialHolder)).to.eventually.be.a.bignumber.equal(balanceOfInitialHolder); 
});


});



