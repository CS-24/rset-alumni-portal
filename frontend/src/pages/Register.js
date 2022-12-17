import React from "react";
import "./Register.css"

function Register(){
    const today = new Date();
    const latest_passout = today.getFullYear();
    const first_passout=2005;
    const years=[];
    const branches=["CSE","Mechanical","Civil","Electrical","Electronics"];
    for(let i=first_passout;i<=latest_passout;i++)
        years.push(i);
    const getyears=years.map(year=>{
        return(<option value={year}>{year}</option>)});
    const getbranches=branches.map(branch=>{
        return(<option value={branch}>{branch}</option>)});
    return(
        <div className="register_container">
        <form className="form">
            <label>Email</label>
            <br/>
            <input type="text"></input>
            <br/>
            <br/>
            <label>Username</label>
            <br/>
            <input type="text"></input>
            <br/>
            <br/>
            <label>Password</label>
            <br/>
            <input type="text"></input>
            <br/>
            <br/>
            <select name="branch" id="branch">
                <option>Branch</option>
                {getbranches}
            </select>
            <br/>
            <br/>
            <select name="year" id="year">
                <option>Year</option>
                {getyears}
                </select>
                <br/>
            <br/>
            <input type="submit"></input>
        </form>
        </div>
    )

}

export default Register