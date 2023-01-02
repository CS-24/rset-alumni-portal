import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./css/Registration.css";
import axios from "axios";

function Registrations(){
    const [Fname, setFname] = useState("");
    const [Lname, setLname] = useState("");
    const [Uid, setUid] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Branch, setBranch] = useState("");
    const [Year, setYear] = useState(0);

    const today = new Date();
    const latest_passout = today.getFullYear();
    const first_passout=2005;
    const years=[];
    const branches=["CSE","Mechanical","Civil","Electrical","Electronics"];
    for(let i=first_passout;i<=latest_passout;i++)
        years.push(i);
    const getyears=years.map( (year,index)=>{
        return(<option value="year" key={index}>{year}</option>)
    });
    const getbranches=branches.map( (branch,index)=>{
        return(<option value="branch" key={index}>{branch}</option>)
    });

    let navigate = useNavigate();
    const regSubmit = ()=> {
        let profile = {
            fname: Fname,
            lname: Lname,
            uid: Uid,
            email: Email,
            password: Password,
            year: Number(Year),
            branch: Branch
        };

        axios.post("http://localhost:3001/registration",profile ).then((response)=> {
            console.log(profile);
        }); 
    }
    return(
        <div className="register_container">
        <form className="form">
            <label>First name</label>
            <br/>
            <input type="text" name="Fname" onChange={(event) => {
                setFname(event.target.value);
            }}
            />
            <br/>
            <label>Last name</label>
            <br/>
            <input type="text" name="Lname" onChange={(event) => {
                setLname(event.target.value);
            }}
            />
            <br/>
            <label>UID</label>
            <br/>
            <input type="text" name="uid" onChange={(event) => {
                setUid(event.target.value);
            }}
            />
            <br/>
            <label>Email</label>
            <br/>
            <input type="text" name="Email" onChange={(event) => {
                setEmail(event.target.value);
            }}
            />
            <br/>
            <label>Password</label>
            <br/>
            <input type="text" name="Password" onChange={(event) => {
                setPassword(event.target.value);
            }}/>
            <br/>
            <br/>
            <select id="branch" onChange={(event) => {
                setBranch(event.target.value);
            }}>
                <option value="branch">Branch</option>
                {getbranches}
            </select>
            <br/>
            <br/>
            <select id="year" onChange={(event) => {
                setYear(event.target.value);
            }}>
                <option value="year">Year</option>
                {getyears}
                </select>
                <br/>
            <br/>
            <input type="submit" value="submit" onClick={regSubmit}></input>
        </form>
        </div>
    )

}

export default Registrations