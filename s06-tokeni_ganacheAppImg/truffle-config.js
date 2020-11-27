const path = require("path");
require('dotenv').config({path: './.env'});
const HDWalletProvider = require("@truffle/hdwallet-provider");
const MetaMaskAccountIndex = 0;
// const MetaMaskAccountIndex = 4;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  // networks: {   //truffle version
  //   develop: {
  //     port: 8545,
  //   },
  // },
    networks: { //ganache.AppImage version, $truffle migrate, $truffle test(still test error)
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
      // network_id: "5777"
    },
    ganache_local: {
      provider: function() {
      return new HDWalletProvider(process.env.MNEMONIC, "http://127.0.0.1:7545",
      MetaMaskAccountIndex )
      },
      network_id: 5777
      // Error: The network id specified in the truffle config (1337) does not match the one returned by the network (5777)
      // network_id: 0x539
      }, 
    ropsten_infura: {
      provider: function() {
      return new HDWalletProvider(process.env.MNEMONIC, "https://ropsten.infura.io/v3/14583f2d9555469c8c3140d46dc9b55b", MetaMaskAccountIndex)
      },
      network_id: 3
      },
    goerli_infura: {
      provider: function() {
      return new HDWalletProvider(process.env.MNEMONIC, "https://goerli.infura.io/v3/14583f2d9555469c8c3140d46dc9b55b", MetaMaskAccountIndex)
      },
      network_id: 5
      },
    },
  compilers: {
    solc: {
      version: "^0.6.2"  // ex:  "0.4.20". (Default: Truffle's installed solc)
    }
 }

}




// ********* Alternative: Migrating with Ganache ************
//  While Truffle Develop is an all-in-one personal blockchain and console, 
// you can also use Ganache, a desktop application, to launch your personal blockchain.
//  Ganache can be a more easy-to-understand tool for those new to 
//  Ethereum and the blockchain, as it displays much more information up-front.

// The only extra step, aside from running Ganache, is that 
// it requires editing the Truffle configuration file to point to the Ganache instance.

// 1. Download and install Ganache.
// 2. Open truffle-config.js in a text editor. Replace the content with the following:

// module.exports = {
//   networks: {
//     development: {
//       host: "127.0.0.1",
//       port: 7545,
//       network_id: "*"
//     }
//   }
// };

// This will allow a connection using Ganache's default connection parameters.
// 3. Save and close that file.
// 4. Launch Ganache.(type in at terminal $ ganache-cli (global), or click ganacheXX.AppImage)
// 5. On the terminal, migrate the contract to the blockchain created by Ganache:
// $ truffle migrate