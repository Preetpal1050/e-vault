import React from 'react'
import court from "../img/Polygon 4.png"
import Profilepage from './Profilepage'

export default function LandingPage() {
  return (
    <>
      <div className="landingPage">
        <div className="imgOnLandingPage">
          <img src={court} alt="" />
        </div>
        <div className="textHeading">
          <h1>STORE MANAGE & SHARE Legal records with EVault.</h1>
          <button className='createAccountButton'>Create your Account</button>
        </div>

      </div>
      <Profilepage/>
    </>
  )
}
