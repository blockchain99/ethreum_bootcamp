import React, { Component } from "react";
import ItemManagerContract from "./contracts/ItemManager.json";
import ItemContract from "./contracts/Item.json";
import getWeb3 from "./getWeb3";

import "./App.css";
import "./contracts/SimpleStorage.sol";

class App extends Component {
  
  // state = { cost: 0, itemName: "exampleItem1", loaded:false};
  state = { loaded: false};


  //change from function variable to class variable : const web3 -> this.web3
  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      this.web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      this.accounts = await this.web3.eth.getAccounts();
      
      // Get the contract instance.
      //1: main network, 5777: truffle dev network,(in ItemManager.json-"networks": {
    // "5777": {,,,)- localhost 8545
      this.networkId = await this.web3.eth.net.getId(); 
      //which network, our ItemManagerContract is deployed?

      // //make new ItemManager smart contract instance with address deployed.
      // const instance = new web3.eth.Contract(
      //     ItemManagerContract.abi,
      //     ItemManagerContract.networks[networkId] && ItemManagerContract.networks[networkId].address,
      // );
      
      this.itemManager = new this.web3.eth.Contract(
        ItemManagerContract.abi,
        ItemManagerContract.networks[this.networkId] && ItemManagerContract.networks[this.networkId].address,
      );

      this.item = new this.web3.eth.Contract(
        ItemContract.abi,
        ItemContract.networks[this.networkId] && ItemContract.networks[this.networkId].address,
      );

      this.listenToPaymentEvent();

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ loaded:true });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    await contract.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response });
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
    [name]: value
    });
  }

  handleSubmit = async () => {
    const { cost, itemName } = this.state;
    console.log(itemName, cost, this.itemManager);
    //create new item on blockchain for you.
    let result = await this.itemManager.methods.createItem(itemName, cost).send({ from:
    this.accounts[0] });
    console.log(result);
    alert("Send "+cost+" Wei to "+result.events.SupplyChainStep.returnValues._itemAddress);
  };


  // //everytime SupplyChainStep() event fires, log event
  // listenToPaymentEvent = () => {
  //   this.itemManager.events.SupplyChainStep().on("data", async function(evt){
  //     console.log(evt);
  //   });
  // }

  // listenToPaymentEvent = () => {
  //   let self = this;
  //   this.itemManager.events.SupplyChainStep().on("data", async function(evt) {
  //   if(evt.returnValues._step == 1) {
  //   let item = await self.itemManager.methods.items(evt.returnValues._itemIndex).call(
  //   );
  //   console.log(item);
  //   alert("Item " + item._identifier + " was paid, deliver it now!");
  //   };
  //   console.log(evt);
  //   });
  // }

  listenToPaymentEvent = () => {
    let self = this;
    this.itemManager.events.SupplyChainStep().on("data", async function(evt) {
    if(evt.returnValues._step == 0) {
    let item = await self.itemManager.methods.items(evt.returnValues._itemIndex).call(
    );
    console.log(item);
    alert("Item " + item._identifier + " was created, pay it now!");
    };
    console.log(evt);
    });
  }
  render() {
    if (!this.state.loaded) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Simply Payment/Supply Chain Example!</h1>
        <h2>Items</h2>
        <h2>Add Element</h2>
        Cost: <input type="text" name="cost" value={this.state.cost || ''} onChange={this.handleInputChange} />
        Item Name: <input type="text" name="itemName" value={this.state.itemName || ''} onChange={this.handleInputChange} />
        <button type="button" onClick={this.handleSubmit}>Create new Item</button>
      </div>
    );
  }
  // 'networkId' is not defined
  // Maybe it's because you haven't specificated that 
  // network id in your truffle.js file, take a look 

}

export default App;
