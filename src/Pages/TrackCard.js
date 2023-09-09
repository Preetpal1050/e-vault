import React from 'react'
import SideBar from './SideBar'
import Phone from "../img/phone (2).png"
import docs from "../img/docs (2).png"
import car from "../img/car (2).png"
import user from "../img/user (3).png"

export default function TrackCard() {
    return (
        <>

            <div className="Profilepage">
                <SideBar />
                <div className="ProfileSec">
                <div className="track">

                    <div className="SelectTrackText">
                        <h1>Select Department:</h1>
                        <input type="text" placeholder='Dorpdown' />
                    </div>

                    <div className="CardTrack">
                        <div className="cardST">
                            <div className="CardTrackImg">
                                <img src={Phone} alt="" />
                            </div>
                            <p>Mobile Number</p>
                        </div>

                        <div className="cardST">
                        <div className="CardTrackImg">
                                <img src={docs} alt="" />
                            </div>
                        <p>CNR Number</p>
                        </div>

                        <div className="cardST">
                        <div className="CardTrackImg">
                                <img src={user} alt="" />
                            </div>
                        <p>Party Name</p>
                        </div>

                        <div className="cardST">
                        <div className="CardTrackImg">
                                <img src={car} alt="" />
                            </div>
                        <p>Challan/ Vehicle Number</p>
                        </div>
                    </div>

                    <div className="FormTrack">
                        <div className="FormHead">
                            <span>Search by Mobile Number</span>
                        </div>
                        <div className="FormInputT">

                            <div className="NumberInputFormT">
                                <p>Mobile Number :</p>
                            <input type="text" placeholder=''/>
                            </div>

                            <div className="TrackCaptcha">

                                <div className="readCaptcha">
                                    <p>Captcha :</p>
                                    <h3>97dfdsjy</h3>
                                </div>

                                <div className="inputCaptcha">
                                    <p>Enter Captcha :</p>
                                    <input type="text" placeholder='Captcha' />
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="TrackSubmitButton">
                        <button>Submit</button>
                    </div>


                    </div>

                </div>
            </div>


        </>
    )
}
