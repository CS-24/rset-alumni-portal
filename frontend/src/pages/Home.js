import './css/Home.css'
import Posts from "./Posts"
import Navbar from "../components/Navbar"
import Topbar from "../components/Topbar"
function Home() {

  return (
    <div>
    <div className="topside"><Topbar /></div>
      <div className="homeContainer">
        <Navbar/>
      <div className="rightside">
        <Posts/>
      </div>
      </div>
      </div>
  );
}

export default Home;
