import React from 'react'
import "./main.css";

const Main = () => {
  return (
    <>
    <div className="outerforambulance">
    <div className="login">
    <button className="buttonlogin">Patient Login</button>
    <button className="buttonlogin">Doctor Login</button>
    <button className="buttonlogin">Book An Appointment</button>
    <button className="buttonlogin">Apply For Medical</button>
    </div>
    <div className="ambulance">
    <div>Need An Ambulance?</div>
    <button className="buttonambulance">+01-092392894</button>
    </div>
    </div>
    <br />
    <div className="fullmain">
    <div className="information">
    <div className="informationheading">Information</div>
    <div className="informationlist">
        <ul>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
        </ul>
        </div>
    </div>
    <img src="https://assets.sentinelassam.com/h-upload/2023/07/18/469031-foundation-of-new-hospital-building-laid-at-rangamati-mini-primary-health-centre.jpg" />
    <div className="advisory">
        <div className="advisoryheading">Advisory</div>
        <div className="advisorylist">
        <ul>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
        </ul>
        </div>
    </div>
    </div>
    </>
  )
}

export default Main