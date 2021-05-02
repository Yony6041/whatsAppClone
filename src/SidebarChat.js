import { Avatar } from '@material-ui/core';
import React from 'react'
import './SidebarChat.css';


function SidebarChat() {
  return (
    <div className='SidebarChat'>
      <Avatar src="https://avatars.dicebear.com/api/male/Yony.svg"/>
      <div className='sidebarChat__info'>
        <h2>Room name</h2>
        <p>Last message...</p>
      </div>
    </div>
  )
}

export default SidebarChat;
