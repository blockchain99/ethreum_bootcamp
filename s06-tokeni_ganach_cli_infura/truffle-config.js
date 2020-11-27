const path = require("path");
require('dotenv').config({path: './.env'});
// const HDWalletProvider = require("@truffle/hdwallet-provider");
const HDWalletProvider = require('truffle-hdwallet-provider');
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

  // ganache-cli : 8545(same as truffle), ganacheX.AppImage : 7545 - network id (5777)
    networks: { //ganache.AppImage version, $truffle migrate, $truffle test(still test error)
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
      // network_id: "5777"
    },
    ganache_cli: {
      provider: function() {
      // return new HDWalletProvider(process.env.MNEMONIC, "http://127.0.0.1:7545",
      return new HDWalletProvider(process.env.MNEMONIC, "http://127.0.0.1:8545",
      MetaMaskAccountIndex )
      },
      // network_id: 5777
      network_id: 1606417601490 //meta says 0x539

      // Error: The network id specified in the truffle config (1337) does not match the one returned by the network (5777)
      // network_id: 0x539
      }, 
    ropsten_infura: {
      provider: function() {
      return new HDWalletProvider(process.env.MNEMONIC, "https://ropsten.infura.io/v3/14583f2d9555469c8c3140d46dc9b55b", MetaMaskAccountIndex)
      },
      network_id: 3,
      //add this 2 lines
      gas: 3000000,
      gasPrice: 10000000000
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

};




// ********* Alternative: Migrating with Ganache ************
