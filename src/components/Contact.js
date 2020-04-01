import React, { Component } from "react";
import "./Style.css";

class Contact extends Component {
  render() {
    const name = "Abdel";
    const avatar = "https://cdn.icon-icons.com/icons2/884/PNG/128/person_4_icon-icons.com_68900.png";
    const online = true;

    return (
      <div className = 'main'>
        <div className = 'Contact'>
          <img class = 'avatar' src = {avatar} alt = ''></img>
          <div className = 'container'>
            <h4 className = 'name'>{name}</h4>
            <div className = 'status'>
              {online ? 'online' : 'offline'}
              {online ? <span className = 'status-online' /> :  <span className = 'status-offline' />}   
          </div>
        </div>
      </div>
    </div> 
    );
  }
}

export default Contact;