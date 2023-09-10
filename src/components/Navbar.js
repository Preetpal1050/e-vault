import React from 'react'
import logo from "../img/evault Logo2.png"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="#">About</Link></li>
          <li><Link to="#">Contact</Link></li>
          <li><Link to="/PaymentPage">Payment</Link></li>
        </ul>
        <div className="NavbarButton">
          <div className="signButton">

            <Link to="/Login" style={{ textDecoration: "none" }}>
              <button>
                Sign In
              </button>
            </Link>

          </div>
          <div className="signButton">

            <Link to="/SignUp" style={{ textDecoration: "none" }}>
              <button>
                Sign up
              </button>
            </Link>

          </div>
        </div>
      </nav>

    </>
  )
}
