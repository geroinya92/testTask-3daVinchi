import { AppBar, Container } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import HandshakeIcon from '@mui/icons-material/Handshake';
import GroupIcon from '@mui/icons-material/Group';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WorkIcon from '@mui/icons-material/Work';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ListItemButton from '@mui/material/ListItemButton';
import React, { Component } from 'react'
import { StickyContainer, Sticky } from 'react-sticky';
import '../App.css';
import Typography from '@mui/material/Typography'

const
 menuItems = [
    { label: "User", path: "/user", icon: <PersonIcon /> },
    { label: "Accounts", path: "/accounts", icon: <GroupIcon /> },
    { label: "Cart", path: "/cart", icon: <ShoppingCartIcon /> },
    { label: "Work", path: "/work", icon: <WorkIcon /> },
  ];

const serviceMenu = [
  { label: "Help", path: "/help", icon: <HelpOutlineIcon /> },
  { label: "Exit", path: "/exit", icon: <ExitToAppIcon /> },
 
];   

class App extends React.Component {
  render() {
    return (
      <StickyContainer className='body'>
        {/* Other elements can be in between `StickyContainer` and `Sticky`,
        but certain styles can break the positioning logic used. */}
        <Sticky>
          
          {({
            style,

            // the following are also available but unused in this example
            isSticky,
            wasSticky,
            distanceFromTop,
            distanceFromBottom,
            calculatedHeight
          }) => (
            <header style={style} className = 'App-header'>
              {<a className='App-logo' href='#'>
                <HandshakeIcon fontSize='large' />
              </a>
              }
              {<div className='App-menuItems'>
                {menuItems.map(({ label, icon }) => {
                  return (<ListItemButton>
                    <span key={label}>
                      {icon}

                    </span>
                  </ListItemButton>
                    
                  );
                })}
              </div>
              }
              {<div className=''>
                {serviceMenu.map(({ label, icon }) => {
                  return (<ListItemButton>
                    <span key={label}>
                      {icon}

                    </span>
                  </ListItemButton>
                    
                  );
                })}
              </div>
              }
            </header>
          )}
        </Sticky>
        {
          <div className='Main'>
            <div className='Title'>
             <h1>Lorem Ipsum is simply dummy</h1> 
            </div>
            <div>
            <Typography>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishi
          </p>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishi
          </p>
          </Typography>
            </div>
          
      </div>
        }
      </StickyContainer>
    );
  }
};

export default App
/*function header() {
  return (


    <AppBar sx={{
      width: 70,
      minHeight: '100%',
      left: 0,
      display: 'grid',
      justifyItems: 'center',
      position: '',
      }}>
        <Box sx={{
        marginTop: 1,
        display: 'grid',
        justifyItems: 'center',
        alignItems: 'center'
        }}>
          <HandshakeIcon fontSize='large' />
        </Box>
       
       <Box sx={{
        marginTop: '60%',
        marginBottom: '60%',
        display: 'grid',
        position: 'sticky'
      }}>

        

        <ListItemButton>
          <PersonIcon />
        </ListItemButton>
        
        <ListItemButton>
          <GroupIcon />
        </ListItemButton>
        
        <ListItemButton>
          <ShoppingCartIcon /></ListItemButton>
          <ListItemButton>
          <PersonIcon />
        </ListItemButton>
        
        <ListItemButton>
          <GroupIcon />
        </ListItemButton>
        
        <ListItemButton>
          <ShoppingCartIcon /></ListItemButton>
        <ListItemButton>
          <WorkIcon />
        </ListItemButton>
        <ListItemButton>
          <PersonIcon />
        </ListItemButton>
        
        <ListItemButton>
          <GroupIcon />
        </ListItemButton>
        
        <ListItemButton>
          <ShoppingCartIcon /></ListItemButton>
       
        <ListItemButton>
          <WorkIcon />
        </ListItemButton>
        <ListItemButton>
          <PersonIcon />
        </ListItemButton>
        
        <ListItemButton>
          <GroupIcon />
        </ListItemButton>
        
        <ListItemButton>
          <ShoppingCartIcon /></ListItemButton>
       
        <ListItemButton>
          <WorkIcon />
        </ListItemButton>
       </Box> 

       

       <Box sx={{
        display: 'grid'
      }}>
        <HelpOutlineIcon />
        <ExitToAppIcon />
      </Box> 
        
        
    </AppBar>
  )
}

export default header*/


