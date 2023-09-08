import React from 'react'
import logo from "../img/evault Logo2.png"
import { Link } from 'react-router-dom'

export default function SignUp() {
    return (
        <>

            <div className="SignUpCard">
                <div className="logoImg">
                    <img src={logo} alt="" />
                </div>
                <div className="SignupCardFrom">
                    <h1>Sign Up for EVault</h1>
                    <div className="inputFileds">
                        <span>Mobile Number*</span>
                        <input type="text" />
                        <span>Create UserName*</span>
                        <input type="text" />
                        <span>Create 6-digit security pin*</span>
                        <input type="text" />
                    </div>

                    <div className="buttonSignUp">
                        <button>Sign Up</button>
                        <span>Already have an account?<Link to="/Login" style={{ textDecoration: "none" }}>Sign In</Link> </span>
                    </div>

                </div>
            </div>

        </>
    )
}
