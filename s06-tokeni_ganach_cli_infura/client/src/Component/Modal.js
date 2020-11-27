import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import {Button} from "react-materialize";

export default class Modal extends React.Component {
    
    
    render() {
        if(!this.props.show){
            return null;
        }
      return (
      <div>
        <div>{this.props.children}</div>
          <div className="card-panel">
          <span className="blue-text text-darken-2">
            <div>
              <Button data-target="modal1" className="btn modal-trigger">Whitelist</Button>
              <h4>Account "{this.props.kycAddress}" is now in whitelisted </h4> 
            </div>
          </span>
          </div>
      </div>   
      );      


      
       
    
  }
}