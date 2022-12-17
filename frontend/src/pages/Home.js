import './css/Home.css'
import Posts from "./Posts"
import Navbar from "../components/Navbar"
function Home() {

  return (
      <div className="homeContainer">
      <div className="leftside">
        <Navbar/>
      </div>
      <div className="rightside">
        <Posts/>
      </div>
      </div>
  );
}

export default Home;
