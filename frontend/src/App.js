import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
// import createPost from "./pages/createPost";
// import Post from "./pages/Post";

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element = {<Home/>}/>
          <Route path="/register" exact element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
