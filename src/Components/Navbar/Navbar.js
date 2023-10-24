import React from 'react'
import "./navbar.css";

const Navbar = () => {
  return (
    <>
    <div className="nav">
    <div className="leftside">
        <img src="https://upload.wikimedia.org/wikipedia/en/1/18/Iiitdmj-logo.jpg" className="logo"></img>
        <div>
        <div className="pname">PRIMARY HEALTH CENTRE</div>
        <div className="cname">IIITDM JABALPUR</div>
        </div>  
        </div>
    <div className="rightside">
        <button className="buttonsnav">Contact</button>
        <button className="buttonsnav">About</button>
    </div>
    </div>
    </>
  )
}

export default Navbar