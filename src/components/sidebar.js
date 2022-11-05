import PersonIcon from '@mui/icons-material/Person'
import HandshakeIcon from '@mui/icons-material/Handshake';
import GroupIcon from '@mui/icons-material/Group';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WorkIcon from '@mui/icons-material/Work';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ListItemButton from '@mui/material/ListItemButton';
import React, { Component } from 'react'
import '../App.css';


const menuItems = [
  { label: "User", path: "/user", icon: <PersonIcon /> },
  { label: "Contacts", path: "/contacts", icon: <GroupIcon /> },
  { label: "Shopping Cart", path: "/shopping-cart", icon: <ShoppingCartIcon /> },
  { label: "Work", path: "/work", icon: <WorkIcon /> },
];

const menuSettings = [
  { label: "Help", path: "/help", icon: <HelpOutlineIcon /> },
  { label: "Exit", path: "/exit", icon: <ExitToAppIcon /> },

];

function Sidebar() {
  return (<div className='sidebar'>
    <div className='Logo'>
      <a href='#' ><HandshakeIcon sx={{ fontSize: 55 }} /></a>
    </div>
    <div className='Menu-items'>
      {menuItems.map(({ label, icon }) => {
        return (
          <ListItemButton>
            <span key={label}>
              {icon}
            </span></ListItemButton>
        );
      })}
    </div>
    
    <div className='Menu-settings'>
      {menuSettings.map(({ label, icon }) => {
        return (
          <ListItemButton>
            <span key={label}>
              {icon}
            </span></ListItemButton>
        );
      })}
    </div>

  </div>);
}

export default Sidebar

        
