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

                                <div className="InputText">
                                <span>Case No :</span>
                                <input type="text" placeholder='132AAdwfe0' />
                                </div>
                                <div className="InputText">
                                <span>File :</span>
                                <input type="text" placeholder='Docs.txt' />
                                </div>
                                <div className="InputText">
                                <span>Case type :</span>
                                <input type="text" placeholder='Family' />
                                </div>
                                <div className="InputText">
                                <span>Pending/disposed off :</span>
                                <input type="text" placeholder='Pending' />
                                </div>  
                               

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
