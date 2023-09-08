import React from 'react'
import logo from "../img/evault Logo2.png";
import { Link } from 'react-router-dom' 

export default function Login() {
  return (
    <>
       <div className="SignUpCard">
                <div className="logoImg">
                    <img src={logo} alt="" />
                </div>
                <div className="SignupCardFrom">
                    <h1>Sign in to your account</h1>
                    <div className="inputFileds">
                        <span>Aadhar/Username*</span>
                        <input type="text" />
                        <span>Create 6-digit security pin*</span>
                        <input type="text" />
                    </div>

                    <div className="buttonSignUp">
                        <button>Sign In</button>
                        <p>Forgot security pin?</p>
                        <span>New user?<Link to="/SignUp" style={{ textDecoration: "none" }}>Sign Up</Link></span>
                    </div>

                </div>
            </div>
    </>
  )
}
