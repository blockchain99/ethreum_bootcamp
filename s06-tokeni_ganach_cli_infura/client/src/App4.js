import React, { Component } from "react";
import MyToken from "./contracts/MyToken.json";
import MyTokenSale from "./contracts/MyTokenSale.json";
import KycContract from "./contracts/KycContract.json";
import getWeb3 from "./getWeb3";

//react-materialize without html setup
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

// import 'materialize-css';
import { TextInput, Button, Icon } from "react-materialize";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false , kycAddress: "" };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKycSubmit = this.handleKycSubmit.bind(this);
  }

//
state = { loaded: false , kycAddress: "" };
componentDidMount = async () => {
  try {
  // Get network provider and web3 instance.
  this.web3 = await getWeb3();
  // Use web3 to get the user's accounts.
  this.accounts = await this.web3.eth.getAccounts();
  // Get the contract instance.
  this.networkId = await this.web3.eth.net.getId();
  this.myToken = new this.web3.eth.Contract(
  MyToken.abi,
  MyToken.networks[this.networkId] && MyToken.networks[this.networkId].address,);
  this.myTokenSale = new this.web3.eth.Contract(
  MyTokenSale.abi,
  MyTokenSale.networks[this.networkId] && MyTokenSale.networks[this.networkId].address,);
  this.kycContract = new this.web3.eth.Contract(
  KycContract.abi,
  KycContract.networks[this.networkId] && KycContract.networks[this.networkId].address,);
  // Set web3, accounts, and contract to the state, and then proceed with an
  // example of interacting with the contract's methods.
  this.setState({ loaded:true });
  } catch (error) {
// Catch any errors for any of the above operations.
  alert(
  `Failed to load web3, accounts, or contract. Check console for details.`,);
  console.error(error);
  }
};
  //

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value});
    }

  handleKycSubmit = async () => {
    const {kycAddress} = this.state;
    await this.kycContract.methods.setKycCompleted(kycAddress).send({from: this.accounts[0]});
    // await this.kycContract.methods.setKycCompleted(kycAddress).send({from: this.accounts[4]});
    alert("Account "+kycAddress+" is now whitelisted");
    // console.log("Account "+kycAddress+" is now whitelisted");
    }
  
    render() {
      if (!this.state.loaded) {
      return <div>Loading Web3, accounts, and contract...</div>;
      }
      return (
      <div className="App">
        {/* <div className="row">
          <h2>Capuccino Token for StarDucks</h2>
          <h3>Enable your account</h3>
          Address to allow: <input type="text" name="kycAddress" value={this.state.kycAddress}
          onChange={this.handleInputChange} />
          <Button type="button" onClick={this.handleKycSubmit}>Add Address to Whitelist</Button>
        </div> */}

        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">
                  home
                </i>
                <input placeholder="0x123" id="icon_prefix" type="text" className="validate" name="kycAddress" value={this.state.kycAddress}
          onChange={this.handleInputChange} />
                <label htmlFor="icon_prefix">Address to allow : </label>
              </div>
           
              <div className="col">
              <Button className="btn waves-effect waves-light" type="button" onClick={this.handleKycSubmit} >Add address to Whitelist </Button>
                <i className="material-icons prefix"></i>
              </div>
            </div>    
          </form>
        </div>

        {/* <form onSubmit={this.handleKycSubmit}>
          <label>
            Address :
          <p>Input address to whitelist :  </p>
          <input type="text" name="kycAddress" value={this.state.kycAddress} onChange={this.handleInputChange} />
          </label>
          <input type="submit" value="Submit" />
        </form> */}

{/* https://codesandbox.io/s/react-chat-forked-0r8ki?file=/src/components/Room.js:53-113 */}
{/* http://react-materialize.github.io/react-materialize/?path=/story/components-textinput--default */}
{/* success !!! */}
          {/* <div className="message-send">
            <TextInput
              label="Address"
              className="message-input"
              type="text"
              value={this.state.kycAddress}
              name="kycAddress"
              onChange={this.handleInputChange}
            />
            <Button
              type="submit"
              waves="light"
              className="send"
              onClick={this.handleKycSubmit}
            >
              Submit
              <Icon right>send</Icon>
            </Button>
        </div> */}

      </div>



      );
      }
}

export default App;
