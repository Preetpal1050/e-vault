import React from 'react'
import home from "../img/home (1).png"
import uploaded from "../img/document (1).png"
import search from "../img/search (1).png"
import Drive from "../img/file (1).png"
import about from "../img/aboutIcon (1).png"
import { Link } from 'react-router-dom'

export default function SideBar(props) {

    return (
        <>
            <div className="ProfileSideBare">

                <Link to="/ProfileCard" style={{textDecoration:"none"}}>
                <div className="home">
                    <div className="imgPro">
                        <img src={home} alt="" />
                    </div>
                    <p>Home</p>
                </div>
                </Link>

                <Link to="" style={{textDecoration:"none"}}>
                <div className="home">
                    <div className="imgPro">
                        <img src={uploaded} alt="" />
                    </div>
                    <p>Uploaded Documents</p>
                </div>
                </Link>

                <Link to="" style={{textDecoration:"none"}}>
                <div className="home">
                    <div className="imgPro">
                        <img src={search} alt="" />
                    </div>
                    <p>Search Documents</p>
                </div>
                </Link>

                <Link to="" style={{textDecoration:"none"}}>
                <div className="home">
                    <div className="imgPro">
                        <img src={Drive} alt="" />
                    </div>
                    <p>Drive</p>
                </div>
                </Link>


                <Link to="" style={{textDecoration:"none"}}>
                <div className="home" >
                    <div className="imgPro">
                        <img src={about} alt="" />
                    </div>
                    <p>About EVault</p>
                </div>
                </Link>
                
            </div>
    


        </>
    )
}
