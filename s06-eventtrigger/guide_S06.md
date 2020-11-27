1. npm install -g truffle (already installed !), $ mkdir this_dir , $ cd this_dir , this_dir$ truffle unbox react --- already excuted!!! 
- truffle.com -> react 
- https://github.com/truffle-box/react-box -> truffle-box.json
```
{
  "ignore": ["README.md", ".gitignore", "box-img-lg.png", "box-img-sm.png", ".github"],
  "commands": {
    "Compile": "truffle compile",
    "Migrate": "truffle migrate",
    "Test contracts": "truffle test",
    "Test dapp": "cd client && npm test",
    "Run dev server": "cd client && npm run start",
    "Build for production": "cd client && npm run build"
  },
  "hooks": {
    "post-unpack": "cd client && npm ci"
  }
}
```

```
//truffle-config.js : I changed this js file !!!
const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545
    }
  },
  compilers: {
    solc: {
      version: "0.6.1"
    }
  }
};

```
//change to client dir, then install all the dependencis in /client/package.json - "dependencies" { ... }
2. vscode : change solidity compiler : crtl+shift+p -> change workspace compiler version(Remote) : 0.6.0 -> for this project : I don't use this approach!
3. node --version -> 14(Now installed version, which causes error)
- nvm : node version manager
- ``$ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash``
-> already installed !!

* //Node 12 works with truffle version 5.0.x and 5.1.x

```

*default : $ nvm alias default 12.19.0 ******************

$ command -v nvm => shows "nvm"-> success nvm install
- $ nvm ls-remote
- $ nvm ls
- $ nvm install node //will install the latest version of Node.js
- $ nvm install 12.19.0  //<SPECIFIC_NODE_VERSION>

$ nvm use node 
$ nvm use 12.19.0
//need to specific versin locally installed, if not, default version excuted.

//nvm run node or nvm run --version like nvm run 11.10.0 will switch to the specified ////version of Node.js and open up a Node command line for you to run commands manually ////from afterwards.

- run node
$ nvm run node //default
$ nvm run 12.19.0 //like nvm run 11.10.0

<!-- nvm alias default node, or the specified version with nvm alias default --version like nvm alias default 12.19.0.
Once this default alias is set, any new shell will default to running with that version of Node. -->
$ nvm alias default node
$ nvm alias default 12.19.0
------------------------

```

- in command line in vscode (Current version: 12.19.0)  
```
> nvm ls //It shows 12.19.0 (no need below , nvm use)
> nvm use 12.19.0
> truffle development 
//If error, excute in 
> web3

```
- pragma solidity ^0.6.0;
//instead of Ctrl+P / select 0.6.0 -> truffle-confg.js / 
// compilers : { solc : { version: 0.6.0 } }

- truffle(develop)> .exit //exit cached environment
- excute migrate in new terminal instead of truffle(develop)

----------------
- vs code : delete line - ctrl + shift +k
-vs code : Refactoring all variable to new var name: click target variable , F2, then type in new var name.

- $truffle development
( $truffle development : 1st acct's private key-> 
- 98b068d163bd21e57b3c19dd3343b0406e4f658cd378c595f62f5c3a59168e90 )
( 060a0b7f338938e5f60eee38aad028ea6f84b1b96a36041a6ef089f2f544ce9b )
- $ truffle development> migrate -> after success 

* after App.js 
- Nonce problem: in metamask, Setting/Advance/reset account
  - nonce is the number of transactionis sent from a given address. 
  - In metamask insufficient fund. (afer npm start)
  - copy above private key to Metamaks/import account
  - then reload web browser : localhost:3000
- warning fix : <input type="text" name="cost" value={this.state.cost || ''} ,,,
- see 
  * 1. remix/ itemManager.json -> "address" :xxxx
   "smart contract address": "0xf35455AeEc4aDC8DF17b4523be76195345F4967B",
   - eventtrigger_lecture.sol -> Environment; Web3Provicer (truffle localhost:8545) -> solidity Program is from App.js in vscode not form Remix source.
   -> but actually shown as 5777 in Environement (Custom(5777) network)
   - deploy / At Address : paste 0xf35455AeEc4aDC8DF17b4523be76195345F4967B (address)
  * 2. in handlesubmit func

  - Error: MetaMask settings -> Advanced -> Reset Account.: It works!!
  - In browser / console/ events - supplyChainsteps - returnValues
  in App.js 
  `` alert("Send "+cost+" Wei to "+result.events.SupplyChainStep.returnValues._itemAddress);``

  * 2 ways of sendTransaction 
    1. remix
    2. truffle(development)> web3.eth.sendTransaction({to:"addr_in_alert_popupwindow ", value:100, from:accounts[1], gas:300000}); -addr:  such as events.SupplyChainStep.returnValues._itemAddress
    - truffle(develop)> web3.eth.sendTransaction({to:"0xc17f20AA1294A3d2bC502b19bd0e3D31c1edF69b", value:100, from:accounts[1], gas: 300000});

--------------------------------------------------------------------
    -> Returned error: VM Exception while processing transaction: revert The transaction wasn't successful, cancelling
    at XMLHttpRequest._onHttpResponseEnd -> solved account address shown by excuting $ truffle development -> from : address of second account, to : address of 3rd acct.

    * IN Alet window, copy address, 0xbe8F64da8573b26875d5f2188e9CED7ecb84d8C9
    *then in webbrowser, Input Cost in Wei, Item idenfier :100 Wei, ALPI
    * 0.0000000000000001 eth <- 100 wei 

- after metamask setting / Advanced / reset

    SEND 100 Wei to 
    0x5502ad64bfF06A6bb9e08e823C5007b281ea498F -> this is _itemAddress: in returnValues._itemAddress

    0x9279Dafe80C448A9F923a05337BED3dC0792E1cb
    0xAB62AbD315C08F00FB2EeE86bE90302CcB936546

    -_step = 0
       SEND 100 Wei to 
    0x402701a7080Fb25178a20dce955A140BF2b6314C
***[Tmux & Vim for development env]( https://www.youtube.com/watch?v=28Gzo_hT_TI )