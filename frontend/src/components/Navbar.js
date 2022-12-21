import React,{useState} from 'react'
import Groups from './Groups'
import './Navbar.css'
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GroupsIcon from '@mui/icons-material/Groups';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
   const [groupsDisplay,groupsDisplaySet]=useState(false);
   const [navbarDisplay,navbarDisplaySet]=useState(false);

   const groups= <div className="groupContainer">
   <Groups/>
  </div>

   function groupsDisplaySwitch(){
    groupsDisplaySet(prevstate=>!prevstate);
  }


   const navbar=<div className="navContainer">
   <div className="homeNav navOptions">
   <HomeIcon className="homeIcon"/>Home</div>
   <div className="notiNav navOptions"><NotificationsIcon/>Notifications</div>
   <div className="whiteLine"></div>
   <div className="groupHeader navOptions" onClick={groupsDisplaySwitch} ><GroupsIcon/>Groups</div>
   {groupsDisplay? groups:null}
      </div>


  function navbarSwitch(){
    navbarDisplaySet(prevstate=>!prevstate)
  }

  return (
        <div className={navbarDisplay ? "background":"original"}>
        <div className="menuIcon" onClick={navbarSwitch}><MenuIcon /></div>
        {navbarDisplay ? navbar:null}
    </div>
  )
}

export default Navbar