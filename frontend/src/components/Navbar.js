import React from 'react'
import Groups from './Groups'
import './Navbar.css'
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GroupsIcon from '@mui/icons-material/Groups';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <div className="navContainer">
        <div className="menuIcon"><MenuIcon /></div>
        <div className="homeNav navOptions">
        <HomeIcon className="homeIcon"/>Home</div>
        
        <div className="notiNav navOptions"><NotificationsIcon/>Notifications</div>
        <div className="whiteLine"></div>
        <div className="groupHeader navOptions"><GroupsIcon/>Groups</div>
        <div className="groupContainer">
            <Groups/>
        </div>
    </div>
  )
}

export default Navbar