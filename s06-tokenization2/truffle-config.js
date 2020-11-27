const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {   //truffle version
    develop: {
      port: 8545,
    },
  },
  //   networks: { //ganache.AppImage version, $truffle migrate, $truffle test(still test error)
  //   development: {
  //     host: "127.0.0.1",
  //     port: 7545,
  //     network_id: "*"
  //     // network_id: "5777"
  //   }
  // },
  compilers: {
    solc: {
      version: "^0.6.2"  // ex:  "0.4.20". (Default: Truffle's installed solc)
    }
 }
};





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