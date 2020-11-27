--------- 1st excute : $ ganache-cli 
* after compile, migrate if code changed, 
 * s06-tokeni_ganach_cli$ cd client && npm run start

* [how to use react-materialize](https://stackoverflow.com/questions/35499842/how-to-use-materialize-css-with-react)
  * npm install materialize-css
  * npm install react-materialize

There are several ways of using Materialize CSS in ReactJS. However, I always use the following easiest one.

Here you can use Materialize CSS classes just like your HTML site using only ClassName with tags.(I use this approach!!)

1 ) Install Materialize CSS for ReactJS using NPM.

npm install materialize-css@next 
2 ) Then import the minified materialize CSS file to index.js file.

import 'materialize-css/dist/css/materialize.min.css'
3 ) Now if you want to use google icons add the following codes in your public / index.html file.

<!--Import Google Icon Font-->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
4 ) Finally to use Javascript events on input forms or other places add the following codes in your public / index.html file.

 <!-- Compiled and minified JavaScript -->
 <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
N.B. => Since all files need to go through the index.js file, so importing your minified Materialize CSS to index.js once is enough. Otherwise, you need to import these CSS files to all your js files.

-------------------------------------------------
* materilaze css react without index.html

Solution Without index.html
From react-materialize - Installation

``npm install materialize-css``

``npm install react-materialize``



In your App.js or App.jsx add
   ``import "materialize-css/dist/css/materialize.min.css"; ``
   ``import "materialize-css/dist/js/materialize.min.js";``


Usage Examples:

* HTML Setup (from materializecss)

```
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="path/to/materialize.css">
  </head>
  <body>
    <script src="path/to/your/bundle.js"></script>
  </body>
</html>
```

* Javascript
```
import 'materialize-css';
import { Button, Card, Row, Col } from 'react-materialize';
Note
materialize-css exposes css via style field in package.json, if you have another tool for CSS that identifies this field you can remove the import from index.html.
```

1. Example 1
```
import React from "react";
import { Button } from "react-materialize";

export default function CustomMediaBox() {
  return <Button> Click Me </Button>;
  );
}
```

2. Example 2
```
import React from "react";
import { MediaBox } from "react-materialize";

export default function CustomMediaBox() {
  return (
    <MediaBox
      options={{
        inDuration: 275,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200
      }}
    >
      <img
        alt=""
        src="https://materializecss.com/images/sample-1.jpg"
        width="650"
      />
    </MediaBox>
  );
}

*refrence only : - ganache excute : /home/ys/ganache-2.4.0-linux-x86_64.AppImage -> clink to excute!!!
* Change solc verison in truffle:
   * In truffle-config.js there is a compilers section where you can specify the version. In the example below I am using the latest 0.6 version.
   (base) ys:~$ truffle version
    Truffle v5.1.53 (core: 5.1.53)
    Solidity v0.5.16 (solc-js)
    Node v12.19.0
    Web3.js v1.2.9

```

----------now Install new version of truffle -----
``$ npm install -g truffle``
``(base) ys:~/ethreum_bootcamp/s06_tokenization$ npx truffle version``
Truffle v5.1.53 (core: 5.1.53)
Solidity - 0.6.0 (solc-js)
Node v12.19.0
Web3.js v1.2.9

```
(base) ys:~/ethreum_bootcamp$ mkdir s06_tokenization
(base) ys:~/ethreum_bootcamp$ cd s06_tokenization
(base) ys:~/ethreum_bootcamp/s06_tokenization$ truffle unbox react
```
   
  * success ! - Commands:

  Compile:              truffle compile
  Migrate:              truffle migrate
  Test contracts:       truffle test
  Test dapp:            cd client && npm test
  Run dev server:       cd client && npm run start
  Build for production: cd client && npm run build


* npm install --save @openzeppelin/contracts@v3.0.0
  - During install : no find ys/package.json : error (Instead copy openzepplin dirctory in github to this dir)
* import "@openzeppelin/contracts/token/ERC20/ERC20.sol"; -> “Could not find import from any sources” errorError 
   * npm install @openzeppelin/upgrades

   ------------I installed globally ------> It works!!
   ys:~$ npm install -g --save @openzeppelin/contracts@v3.0.0


* So I again excute : $ npm install @openzeppelin/contracts
* :~/ethreum_bootcamp/s06_tokenization$ npx truffle version
Truffle v5.1.37 (core: 5.1.37)
Solidity v0.5.16 (solc-js)
Node v12.19.0
Web3.js v1.2.1

* $ truffle compile
Error: Truffle is currently using solc 0.5.16, but one or more of your contracts specify "pragma solidity >=0.6.0". 
Please update your truffle config or pragma statement(s).
  * I attached below in truffle-config.js
 compilers: {
    solc: {
      version: "0.6.0"}
        },

---------------------------------------

``ys:~/ethreum_bootcamp/s06-tokenization$ npm install --save chai chai-bn chai-as-promised``


* Note: You can use the `truffle unbox ` command to download any of the other Truffle Boxes.

* Note: To create a bare Truffle project with no smart contracts included, use `truffle init`.
```
(base) ys:~/ethreum_bootcamp$ mkdir s06_tokenization
(base) ys:~/ethreum_bootcamp$ cd s06_tokenization
(base) ys:~/ethreum_bootcamp/s06_tokenization$ truffle unbox react
```
``$ truffle test ./test/MyToken.test.js``
``$ truffle compile``

* To deploy our smart contracts, we're going to need to connect to a blockchain. Truffle has a built-in personal blockchain that can be used for testing. This blockchain is local to your system and does not interact with the main Ethereum network.
  * You can create this blockchain and interact with it using Truffle Develop.
  ``$ truffle develop `` 
  ``truffle(development)> migrate``
* 119. Let's Add Unit Tests Using Mocha, Chai,
Chai-Expect and Chai-as-Promised: pdf doc -> 
  ``$ truffle(development)> test  // It works with env($ $truffle version)! contradict to pdf doc's error ``
  * [chai promise](github.com/domenic/chai-as-promised)

* Crowsale.sol <-  Openzeppelin(v2.5.0)

* ``_mint`` : giving initiaalSupply(2_deploy_contract.js:`` await deployer.deploy(MyToken, 1000000000);``) 
         to ``msg.sender ``(who create the token)
* ``await deployer.deploy(MyTokenSale, 1, addr[0], MyToken.addr);``
  * MyToken.addr : smart contract address from MyToken
  * sending money from addr[0]-token creator to MyTokenSale address
`` let instance = await MyToken.deployed();``
  // transfer(address recipient, uint256 amount)
`` await instance.transfer(MyTokenSale.addr, 100000);``

* truffle (develop)> migrate

* truffle (develop)> test -> fail!!
* truffle(develop)> test ./test/MyToken.test.js -> succeed !!
  * in test dir, Just only one XX.test.js file exist!!!
* .env file:
  * $ npm install --save dotenv
* truffle(develop)> migrate   //shows INITIAL_TOKENS: '1000000000;'
* In 2_deploy_contracts.js, substitue 1000000000 with process.env.INITIAL_TOKENS
* after KycContract.sol, .. -> >test -> Error: KycContract has no network configuration for its current network id (5777).

* /s06-tokenization2$ cd client && npm run start

====== from this, I use ganache =====

* click ganache.AppImage -> ganache run! with 7545

The problem is now, your accounts to deploy the smart contract is in ganache, the account to interact with the dApp
is in MetaMask. These are two different sets of private keys. We have two options:
1. Import the private key from Ganache into MetaMask (we did this before)
2. Use MetaMask Accounts to deploy the smart contract in Ganache (hence making the MetaMask account the
“admin” account)
3. But first we need Ether in our MetaMask account. Therefore: First transfer Ether from Ganache-Accounts to
MetaMask Accounts
``$ truffle console --network development``
`` truffle develop> accounts``
``truffle develop>``
//Paste address 0 in metamask

- error fix: Metamask – Trying to call a function on a non-contract address(not work!)
```

Another possible issue that you changed your contract but haven't redeployed it.

Compile first:

truffle compile
and then redeploy:

truffle migrate --reset
Check your app again.
```

* MetaMask : ganache - setting : chain ID: 0x539 (In tutorial: 5777 )
* /s06-tokeni_ganacheV$ truffle console --network development
 * from:  - accounts[0] : ganache accounts
shown in $truffle console --network development: which is not truffle.

********* migrate with ganache_local ** 

* /s06-tokeni_ganacheV$ truffle console --network development
  * truffle(development)> migrate --network ganache_local -> It works!!
* If above , stuck in migrate stage -> do asf tow lines , then do again above two lines
  * $ truffle compile
  * $ truffle migrate

* in Metamask , choose account1 : 
0xBE0495f4a9BAb9B9C3739fc8Dd5506D15D5A62De
- in Metamask, first add account1, then account2 in Add Address to Whitelist box in localhost:3000 website

* where to buy token: need address
 1. copy from address in MyTokenSale.json - MyTokenSale.networks[5777].address
 2. API from html in website : MyTokenSale.networks[this.networkId].address

 * error: while formatting outputs from RPC '{"value":{"code":-32603,"message":"Internal JSON-RPC error.","data":{"message":"VM Exception while processing transaction: revert Ownable: caller is not the owner","code":-32000,"data":
 -> import accont0 from ganache with private key to metamask as account4, then copy act 4(contract creator, owner) in metamask to web site add address to whitelist -> It works!!, add acct5(accounts[3]) to whitelist

 * npm install -g sass //sass installed globally (.scss file extention )
 * npm install node-sass

 - send from account 4(creator) to account 5 in metamask 

============= option 2 with ganache ==============
* ganache-cli : 8545(same as truffle), ganacheX.AppImage : 7545 - network id (5777)
 ********* Alternative: Migrating with Ganache ************
  While Truffle Develop is an all-in-one personal blockchain and console, 
 you can also use Ganache, a desktop application, to launch your personal blockchain.
  Ganache can be a more easy-to-understand tool for those new to 
  Ethereum and the blockchain, as it displays much more information up-front.

 The only extra step, aside from running Ganache, is that 
 it requires editing the Truffle configuration file to point to the Ganache instance.

 1. Download and install Ganache.
 2. Open truffle-config.js in a text editor. Replace the content with the following:
```
 module.exports = {
   networks: {
     development: {
       host: "127.0.0.1",
       port: 7545,
       network_id: "*"
     }
   }
 };
```
 This will allow a connection using Ganache's default connection parameters.
 3. Save and close that file.
 4. Launch Ganache.(type in at terminal ``$ ganache-cli (global), or click ganacheXX.AppImage``)
 5. On the terminal, migrate the contract to the blockchain created by Ganache:
 ``$ truffle migrate``
 6. To interact with the contract, you can use the Truffle console. The Truffle console is similar to ``Truffle Develop``, except it connects to an existing blockchain (in this case, the one generated by Ganache).
 ```
 truffle console
 ```
 You will see the following prompt: ``truffle(development)>``

 =================== Interacting with contract =================
- If work in ganache env: 1. ganache run, 2. truffle client by 
``$ truffle console --network development    > accounts ``
* Begin by establishing both the deployed MetaCoin contract instance and the accounts created by either Truffle's built-in blockchain or Ganache:

``truffle(development)> let instance = await MyToken.deployed()``
``truffle(development)>instance.address``
``truffle(development)> let accounts = await web3.eth.getAccounts()``

* Check the metacoin balance of the account that deployed the contract:

``truffle(development)> acccounts[0] //address of 1st account``

```
truffle(development)> accounts[0]

truffle(development)> let balance = await instance.getBalance(accounts[0]) //error 
truffle(development)> let balance = await instance.balanceOf(accounts[0])
truffle(development)> balance.toNumber()``
```
* See how much ether that balance is worth (and note that the contract defines a metacoin to be worth 2 ether):

``truffle(development)> let ether = await instance.getBalanceInEth(accounts[0])
truffle(development)> ether.toNumber()``

* Transfer some metacoin from one account to another:

``truffle(development)> instance.sendCoin(accounts[1], 500)``

* Check the balance of the account that received the metacoin:

``truffle(development)> let received = await instance.getBalance(accounts[1])
truffle(development)> received.toNumber()``

* Check the balance of the account that sent the metacoin:

``truffle(development)> let newBalance = await instance.getBalance(accounts[0])
truffle(development)> newBalance.toNumber()``


* vs code line number : File / online service setting / line number / on

----------------
* ``s06-tokeni_ganacheV$ truffle console --network ganache_local``
``truffle(ganache_local)> accounts `` -> It's for metamask, which is 
differenct ``$ truffle console --network development    > accounts ``, that of ganache accounts.
- myTokenSale._address : 0xC3Cc148CA991BE765F099BC7277E36a26637eA36 from web site: 
- Token-address(address in MyToken.jsson): 0x2a02247FF7a125e8d435B70cCf926b8ABab3150f
- from acc5, send to address of "Address to send ether" in web 1 ether -> succeed!
-> in account5 in metamask , (acct4 is creator) ADD Token -> 10AR
 * send 1wei , 0.00000000000000001 ether from Acct4 to 0xC3Cc148CA991BE765F099BC7277E36a26637eA36 -succeed!!!
 - acct4 , Add Tokens


 
 ** PROBLEM(address of META MASK ACCT doesn't reflect account from ganach.AppImage  )
  - so, in website, can't add meta mask acct1 to whiltlist : 
  0x4A147FCB69028bFA5BD0abCF77C1bCd8D2F988D8 - myTokenSale contract(Import 2nd acct in 
  ganache.AppImage to acct8 in metamask)
  -> So, Import ganach.AppImage first account to metamask as account6 -> inut websit 
  : It works!!
  ----------------------------------------
  
$Truffle Console: A basic interactive console connecting to any Ethereum client
$Truffle Develop: An interactive console that also spawns a development blockchain

* not showing webpage :  index.js:1375 MetaMask - RPC Error: Permissions request already pending; please wait.
- $ truffle compile

- $ truffle migrate --network ganache

--------- Common problems developing Ethereum dApps with Metamask---
[truble shoot ganache trufle develop](https://www.moesif.com/blog/blockchain/ethereum/Common-Problems-Developing-Ethereum-DApps-With-Metamask/)

myTokenSale contract addr : 0xa6C12b8e714b378d3390fd03dc22628471B2981e
myToken contract addr : 0x953BA8762A42139E5771E97BeA85be92d29c09FD

* truffle-config.js : updated with ropsten_infura,
  - "Migrations" could not deploy due to insufficient funds
   * Account:  0x81061f8c134697Acb94f994B71cc7C2D1b64E013
   "Migrations" could not deploy due to insufficient funds
   * Account:  0x90117F8684a31282c7f7923abda2cd924F0eB164

   0x81061f8c134697Acb94f994B71cc7C2D1b64E013\


$ web3.eth.sendTransaction({from: accounts[0], to:"0x81061f8c134697Acb94f994B71cc7C2D1b64E013",
value: web3.utils.toWei("1", "ether")})

-ropsten
0x81061f8c134697Acb94f994B71cc7C2D1b64E013
==================================================================
*[Developing Ethereum Dapps with Truffle and MetaMask](https://ednsquare.com/story/developing-ethereum-dapps-with-truffle-and-metamask------HQMCB6)
* TestRPC is replace with ganache-cli
 ganache-cli : 8545(same as truffle), ganacheX.AppImage : 7545 - network id (6)

=========once again I did ======
$ truffle migrate --network ganache_cli
$ truffle console --network ganache_cli
truffle(ganache_cli)> accounts
[
  '0x76976C1bF8E948Ea8f3575104cbed15C29cEAeDE',...
truffle(ganache_cli)> migrate --reset
Replacing 'MyToken'
   -------------------
  
   > contract address:    0x2b93ba71D047C3a89A0baD91a25e4DAF3c21881f
  
   > account:             0x76976C1bF8E948Ea8f3575104cbed15C29cEAeDE
  (ganache_cli accounts[0])

   Replacing 'KycContract'
   -----------------------
  
   > contract address:    0x2b93ba71D047C3a89A0baD91a25e4DAF3c21881f
   
   > account:             0x76976C1bF8E948Ea8f3575104cbed15C29cEAeDE
  
   Replacing 'MyTokenSale'
   -----------------------
  
   > contract address:    0xE3a8953Af97828c35A23cC7f0ccf5F9E6cca6f13
 
   > account:             0x39D654422e67521F9da75169B82996Ebf91F289D
   --------------------
   metamask ganache_cli acct1 : 0x76976C1bF8E948Ea8f3575104cbed15C29cEAeDE
- same as above gaanche_cli accounts[0], which is msg.sender, owner of myToken contract. 
Mytoken.json / address 0xeA4ED77D36320723B8731C010f6d2F73D3590821
``truffle(ganache_cli)> let instanceMyToken = await MyToken.deployed()``
``truffle(ganache_cli)> instanceMyToken.address``
0xeA4ED77D36320723B8731C010f6d2F73D3590821 
============ $ truffle migrate --network ropsten_infura
metamask accounts[0] not enoughg fund : error
-> [earn fund from faucet site](https://www.trufflesuite.com/tutorials/using-infura-custom-provider)

Use an ether faucet
Make sure you have enough ether in your account to do the deployment. You can acquire ether on the Ropsten network through a service known as a faucet. While there are multiple faucet sites out there, one service we recommend is hosted by MetaMask.

Navigate to MetaMask's Test Ether Faucet.

Connect to the Ropsten Test Network using MetaMask.

The faucet will link to your first account. Click "Request 1 Ether From Faucet" to submit your request.

Within a short period of time, your account will be populated with the requested ether.

We are now ready to deploy to Ropsten!
-----------------------------------------
* After ether is funded to accounts[0] in ropsten : 
``$ truffle migrate --network ropsten_infura `` -> It works!!
- MyTokenSale contract address in $ truffle migrate --network ropsten_infura
0xAf03eF74bBC6b50aB1CA711996cFa6174269DfEf

- MyToken.json : network id - 3, address - 0xAf03eF74bBC6b50aB1CA711996cFa6174269DfEf
* Buy more tokens click -> You have xxx ARD, works , after change App.js with remove constructor & 
   * ``this.setState({ loaded:true, tokenSaleAddress: MyTokenSale.networks[this.networkId].address }, this.updateUserTokens);``
  ``// this.setState({ loaded:true, tokenSaleAddress: this.myTokenSale._address }, this.updateUserTokens);``