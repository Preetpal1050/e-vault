import React, { useState } from 'react'
import Navbar from './Navbar'
import home from "../img/home (1).png"
import uploaded from "../img/document (1).png"
import search from "../img/search (1).png"
import Drive from "../img/file (1).png"
import about from "../img/aboutIcon (1).png"
import upload from "../img/upload (2).png"
import Retrieve from "../img/download (2).png"
import Track from "../img/traker (2).png"
import share from "../img/share1.png"
import uploadSec from "../img/uploadSEc.png"


const ProfileCards = () => {
    return (
        <>
            <h1>Welcome, Rajiv Kumar!</h1>
            <div className="ProfileCards">


                <div className="ProfileLinkCard">
                    <div className="imgLink">
                        <img src={upload} alt="" />
                    </div>
                    <h3>Upload Documents</h3>
                </div>
                <div className="ProfileLinkCard">
                    <div className="imgLink">
                        <img src={Retrieve} alt="" />
                    </div>
                    <h3>Retrieve Documents</h3>
                </div>
                <div className="ProfileLinkCard">
                    <div className="imgLink">
                        <img src={Track} alt="" />
                    </div>
                    <h3>Track Status</h3>
                </div>
                <div className="ProfileLinkCard">
                    <div className="imgLink">
                        <img src={share} alt="" />
                    </div>
                    <h3>Share Documents</h3>
                </div>


            </div>
        </>
    );
};


const Uploadimg = () => {
    return (
        <>
            <div className="UploadSection">
                <div className="UploadImgSec">
                    <img src={uploadSec} alt="" />
                </div>
                <div className="InputSection">
                    <p>Document type:</p>
                    <input type="text" placeholder='(dropdown)' />
                </div>
                <div className="UploadSubmitbtu">
                    <button>Submit</button>
                </div>

            </div>
        </>
    );
};

const SearchDocuments = () => {
    return (
        <div style={{display:"flex", alignItem:"center",justifyContent:"center"}}>
            <h1> Search Documents कार्य प्रगति पर है</h1>
        </div>
    );
};


const Drived = () => {
    return (
        <div style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
            <h1> Drived कार्य प्रगति पर है</h1>
        </div>
    );
};

const AboutEVault = () => {
    return (
        <div style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
            <h1> About EVault कार्य प्रगति पर है</h1>
        </div>
    );
};


export default function Profilepage() {

    const [selectedItem, setSelectedItem] = useState('Home');


    const handleClicked = (value) => {
        setSelectedItem(value);
    };


    return (
        <>
            <div className="Profilepage">

                <div className="Profilepage">
                    <div className="ProfileSideBare">
                        <div className={`home ${selectedItem === 'Home' ? 'active' : ''} ${selectedItem === 'Home' ? 'hovered' : ''}`} onClick={() => handleClicked('Home')}>
                            <div className="imgPro">
                                <img src={home} alt="" />
                            </div>
                            <p>Home</p>
                        </div>
                        <div className={`home ${selectedItem === 'Uploaded Documents' ? 'active' : ''} ${selectedItem === 'Uploaded Documents' ? 'hovered' : ''}`} onClick={() => handleClicked('Uploaded Documents')}>
                            <div className="imgPro">
                                <img src={uploaded} alt="" />
                            </div>
                            <p>Uploaded Documents</p>
                        </div>
                        <div className={`home ${selectedItem === 'Search Documents' ? 'active' : ''} ${selectedItem === 'Search Documents' ? 'hovered' : ''}`} onClick={() => handleClicked('Search Documents')}>
                            <div className="imgPro">
                                <img src={search} alt="" />
                            </div>
                            <p>Search Documents</p>
                        </div>
                        <div className={`home ${selectedItem === 'Drive' ? 'active' : ''} ${selectedItem === 'Drive' ? 'hovered' : ''}`} onClick={() => handleClicked('Drive')}>
                            <div className="imgPro">
                                <img src={Drive} alt="" />
                            </div>
                            <p>Drive</p>
                        </div>
                        <div className={`home ${selectedItem === 'About EVault' ? 'active' : ''} ${selectedItem === 'About EVault' ? 'hovered' : ''}`} onClick={() => handleClicked('About EVault')}>
                            <div className="imgPro">
                                <img src={about} alt="" />
                            </div>
                            <p>About EVault</p>
                        </div>
                    </div>
                </div>


                <div className="ProfileSec">

                    {selectedItem === 'Home' && (
                        <ProfileCards />
                    )}

                    {selectedItem === 'Uploaded Documents' && (
                        <Uploadimg />
                    )}

                    {selectedItem === 'Search Documents' && (
                        <SearchDocuments />
                    )}

                    {selectedItem === 'Drive' && (
                        <Drived />
                    )}

                    {selectedItem === 'About EVault' && (
                        <AboutEVault />
                    )}





                </div>
            </div>
        </>
    )
}
