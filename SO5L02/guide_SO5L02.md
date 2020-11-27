* //Node 12 works with truffle version 5.0.x and 5.1.x 

1. Type in “npm init -y” and generate the package.json to initialize the current empty directory as
node project.
2. Type in “npm install --save web3” to install web3.js in the current directory
3. npm install web3.js-browser
4. Open index.html on chrome devlopment console - / Tools/Dev/Console
5. 

> let Web3 = require("web3"); // already Web3 defined!!-> no need to excute this line!!
> let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

```
> var myContract = new web3.eth.Contract([
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_myUint",
				"type": "uint256"
			}
		],
		"name": "setUint",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getContractAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "myUint",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
],
'0xBB3498Df9C04527bD1b608D03437da2B1C0ab7F8');
undefined
> myContract.methods.myUint().call().then(console.log).catch(console.error);
Promise {<pending>}
BigNumber {_hex: "0x0a", _ethersType: "BigNumber"}
```
