import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
// import createPost from "./pages/createPost";
// import Post from "./pages/Post";

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element = {<Home/>}/>
          <Route path="/registration" exact element={<Registration/>}/>
          <Route path="/login" exact element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
