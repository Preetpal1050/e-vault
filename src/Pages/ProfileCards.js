import React from 'react'
import upload from "../img/upload (2).png"
import Retrieve from "../img/download (2).png"
import Track from "../img/traker (2).png"
import share from "../img/share1.png"
import { Link } from 'react-router-dom'
import SideBar from './SideBar'

export default function ProfileCards() {
    return (
        <>
            <div className="Profilepage">
                <SideBar />
                <div className="ProfileSec">
                    <h1>Welcome, Rajiv Kumar!</h1>
                    <div className="ProfileCards">

                        <Link to="/UploadPage" style={{ textDecoration: "none", color: "white" }}>
                            <div className="ProfileLinkCard">
                                <div className="imgLink">
                                    <img src={upload} alt="" />
                                </div>
                                <h3>Upload Documents</h3>
                            </div>
                        </Link>


                        <div className="ProfileLinkCard">
                            <div className="imgLink">
                                <img src={Retrieve} alt="" />
                            </div>
                            <h3>Retrieve Documents</h3>
                        </div>

                        <Link to="/TrackCard" style={{ textDecoration: "none", color: "white" }}>
                        <div className="ProfileLinkCard">
                            <div className="imgLink">
                                <img src={Track} alt="" />
                            </div>
                            <h3>Track Status</h3>
                        </div>
                        </Link>


                        <div className="ProfileLinkCard">
                            <div className="imgLink">
                                <img src={share} alt="" />
                            </div>
                            <h3>Share Documents</h3>
                        </div>


                    </div>
                </div>
            </div>
        </>

    )
}
