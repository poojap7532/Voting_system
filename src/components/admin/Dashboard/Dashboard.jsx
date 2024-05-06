import React from 'react'
import Image1 from "../Image/71Ng4IC65-L.jpg";
import Image2 from "../Image/bjp.jpg";
import Image3 from "../Image/congress.png";
import Image4 from "../Image/download.jpeg"
import Image5 from "../Image/cpi.jpg";
import { Navigate, useNavigate } from "react-router-dom";

export const Dashboard = () => {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/Election")
        navigate("/Party")
        navigate("/PartyConnection")
        navigate("/User")

    };



    return (
        <div>
            <>
                <div class="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
                    <div class="bg-dark p-4">
                        <h5 class="text-body-emphasis h5">Dashboard</h5>
                        <h5 class="text-body-emphasis h5">Party
                            <button onClick={handleClick} className='bg-dark'></button></h5>

                        <h5 class="text-body-emphasis h5">Election
                            <button onClick={handleClick} className='bg-dark'></button></h5>
                        <h5 class="text-body-emphasis h5">Connection
                            <button onClick={handleClick} className='bg-dark'></button></h5>
                        <h5 class="text-body-emphasis h5">User
                            <button onClick={handleClick} className='bg-dark'></button></h5>
                    </div>
                </div>

                <nav class="navbar navbar-dark bg-dark">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>

                <div class="container">
                    <div class="row w-100% h-100%">
                        <div class="col-md-4">
                            <div class="box">Total Party<br />5</div>
                        </div>
                        <div class="col-md-4">
                            <div class="box">Total voter<br />5</div>
                        </div>
                        <div class="col-md-4">
                            <div class="box">Total vote<br />5</div>
                        </div>
                    </div>
                    <br /><br /><br />

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Indian political party</th>
                                <th scope="col">Symbol</th>
                                <th scope="col">Button</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Aam Aadmi Party</td>
                                <td><img src={Image1} className='symbol'></img>
                                </td>
                                <td>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                        <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Bharatiya Janata Party</td>
                                <td><img src={Image2} className='symbol'></img>
                                </td>
                                <td><div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                                </div></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Indian National Congress</td>
                                <td><img src={Image3} className='symbol'></img></td>
                                <td><div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                                </div></td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Bahujan Samaj Party</td>
                                <td><img src={Image4} className='symbol'></img>
                                </td>
                                <td><div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                                </div></td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Communist Party of India</td>
                                <td><img src={Image5} className='symbol'></img>
                                </td>
                                <td><div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                                </div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </>
        </div>
    )
}
