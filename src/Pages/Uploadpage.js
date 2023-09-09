import React from 'react'
import uploadSec from "../img/uploadSEc.png"
import SideBar from './SideBar';



export default function Uploadpage() {

    return (
        <>

            <div className="Profilepage">
                <SideBar/>
                <div className="ProfileSec">
                    <div className="UploadPage">
                        <h1>Upload Documents</h1>
                        <div className="UploadSection">
                            <div className="UploadImgSec">
                                <img src={uploadSec} alt="" />
                            </div>
                            <div className="UploadField">
                                <input className='inputF' type="file" placeholder='Upload' />
                            </div>
                            <div className="InputSection">
                                <p>Document type:</p>
                                <input type="text" placeholder='(dropdown)' />
                            </div>
                            <div className="UploadSubmitbtu">
                                <button>Submit</button>
                            </div>

                        </div>
                    </div>
                   
                </div>
            </div>


        </>
    );
}
