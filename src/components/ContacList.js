import React, {Component} from 'react';
import './Style.css';


class ContactList extends Component{

  render(){

    const users = [
      {
        name: 'Robert Reyes',
        avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
        online: false
      },
      {
        name: 'Nellie Caldwell',
        avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
        online: true
      },
      {
        name: 'Vernon Mason',
        avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
        online: true
      },
      {
        name: 'Erica Hunt',
        avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
        online: false
      },
      {
        name: 'Juanita Phillips',
        avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
        online: true
      }
    ];

  return(
  <div className = 'main'>
    {users.map((items) => <div className = 'Contact'>
      <img class = 'avatar' src = {items.avatar} alt = ''></img>
      <div className = 'container'>
        <h4 className = 'name'>{items.name}</h4>
        <div className = 'status'>
        {items.online ? 'online' : 'offline'}
          {items.online ? <span className = 'status-online' /> :  <span className = 'status-offline' />}   
        </div>
      </div>
      </div>
    )}
  </div> 
    );
  }
}

export default ContactList;