import React from 'react'
import SideBar from './SideBar'
import search from "../img/search (1).png"

export default function ReciveDocs() {

    const data = [
        { id: 1, name: 'File', age: 'Criminal', Pending:'Pending'},
        { id: 2, name: 'File', age: 'Civil', Pending:'disposed'},
        { id: 3, name: 'File', age: 'Family', Pending:'disposed'},
        { id: 4, name: 'File', age: 'Criminal', Pending:'Pending'},
      ];


    return (
        <>
            <div className="Profilepage">
                <SideBar />
                <div className="ProfileSec">
                    <div className="ReciveDataPage">
                    <h1>Search Documents</h1>
                        <div className="SearchRecive">
                            <p>Case No:</p>
                            <input type="search" name="" id="" />
                            <div className="SearchImgRecive">
                            <img src={search} alt="" />
                            </div>
                        </div>
                        <div className="TableRecive">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Case No.</th>
                                        <th>File</th>
                                        <th>Case type</th>
                                        <th>Pending/disposed off</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.age}</td>
                                            <td>{item.Pending}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
