import React, { Component } from "react";
import MyToken from "./contracts/MyToken.json";
import MyTokenSale from "./contracts/MyTokenSale.json";
import KycContract from "./contracts/KycContract.json";
import getWeb3 from "./getWeb3";

import "./App.css";

class App extends Component {
  // state = { storageValue: 0, web3: null, accounts: null, contract: null };
  state = { storageValue: 0, web3: null, accounts: null, contract: null , loaded: false};
  // state = {  loaded: false };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      this.web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      this.accounts = await this.web3.eth.getAccounts();

      // Get the contract instance.
      this.networkId = await this.web3.eth.net.getId();
      this.deployedNetworkMyToken = MyToken.networks[this.networkId];
      
      this.instanceMyToken = new this.web3.eth.Contract(
        MyToken.abi,
        this.deployedNetworkMyToken && this.deployedNetworkMyToken.address,
      );  
      

      this.deployedNetworkMyTokenSale = MyTokenSale.networks[this.networkId];
      
      this.instanceMyTokenSale = new this.web3.eth.Contract(
        MyTokenSale.abi,
        this.deployedNetworkMyTokenSale && this.deployedNetworkMyTokenSale.address,
      );  
      

      this.deployedNetworkKycContract = MyToken.networks[this.networkId];
      
      this.instanceKycContract = new this.web3.eth.Contract(
        KycContract.abi,
        this.deployedNetworkKycContract && this.deployedNetworkKycContract.address,
      );

      /* Set web3, accounts, and contract to the state, and then proceed with an
         example of interacting with the contract's methods. */
      // this.setState({ web3, accounts, contract: instance }, this.runExample);
      // this.setState({ web3: this.web3, accounts : this.accounts , contract: this.instanceMyToken, loaded: true }, this.runExample);
      this.setState({ web3: this.web3, accounts : this.accounts , contract: this.instanceMyToken, loaded: true });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  // runExample = async () => {
  //   const { accounts, contract } = this.state;

  //   // Stores a given value, 5 by default.
  //   await contract.methods.set(5).send({ from: this.accounts[0] });

  //   // Get the value from the contract to prove it worked.
  //   const response = await contract.methods.get().call();

  //   // Update state with the result.
  //   this.setState({ storageValue: response });
  // };

  render() {
    if (!this.state.loaded) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <p>
          If your contracts compiled and migrated successfully, below will show
          a stored value of 5 (by default).
        </p>
        <p>
          Try changing the value stored on <strong>line 40</strong> of App.js.
        </p>
        <div>The stored value is: {this.state.storageValue}</div>
      </div>
    );
  }
}

export default App;
