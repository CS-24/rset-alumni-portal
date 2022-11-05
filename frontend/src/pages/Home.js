import {useState,useEffect} from "react"
import axios from "axios"

function Home() {
    const [listOfPosts,setListOfPosts] = useState([]);

    useEffect(() =>{
        axios.get("http://localhost:3001/posts").then((response) => {
            setListOfPosts(response.data);
            console.log(response.data);
          });
    },[]);
    
  return (
    <div>{listOfPosts.map((item)=>{
        return (
            <div className="post-container">
                <div className="post-tile">{item.title}</div>
                <div className="post-text">{item.postText}</div>

            </div>
        );
    })}</div>
  )
}

export default Home