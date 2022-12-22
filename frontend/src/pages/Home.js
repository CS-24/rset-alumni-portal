import './css/Home.css'
import Posts from "./Posts"
import Navbar from "../components/Navbar"
import Topbar from "../components/Topbar"
import React,{useState} from 'react'

function Home() {
  const [closeNav,closeNavset]=useState(false);
  function close(){
    closeNavset(prevstate=>!prevstate);
  }
  return (
    <div>
    <div className="topside"><Topbar /></div>
      <div className="homeContainer">
        <Navbar
        closeNav={closeNav} 
        />
      <div className="rightside" onClick={close}>
        <Posts/>
      </div>
      </div>
      </div>
  );
}

export default Home;
