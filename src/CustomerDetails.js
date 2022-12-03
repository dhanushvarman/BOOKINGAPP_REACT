import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { config } from "./config.js"

function Customerdetails() {

    const [booked,setbooked] = useState([])

    useEffect(()=>{
        const fetchData = async()=>{
            const bookedrooms = await axios.get(`${config.api}/bookedcustomers`)
            setbooked(bookedrooms.data)
        }
        fetchData();
    },[])

    return (
        <div className='container mt-5'>
            <div className='row'>
                <h3
                    className="text-center p-2"
                    style={{ backgroundColor: "grey", color: "whitesmoke" }}
                >
                    Customer Details
                </h3>
            </div>
            <div className='row'>
                {
                    booked.map((rooms)=>{
                        return <div className='col-md-6 mt-4'>
                            <div class="card" >
                                <div class="card-body">
                                    <p className='text'><b class="card-txt">HOTEL NAME : </b>{rooms.hotelname}</p>
                                    <p class="text mb-2"><b class="card-txt">ROOM NAME : </b>{rooms.roomname}</p>
                                    <p className='text mb-2'><b class="card-txt">AMENITES : </b>{rooms.amenities}.</p>
                                    <p class="text mb-2"><b class="card-txt">BOOKED STATUS : </b>{rooms.status}</p>
                                    <p class="text mb-2"><b class="card-txt">CUSTOMER NAME : </b>{rooms.customername}</p>
                                    <p class="text mb-2"><b class="card-txt">DATE : </b>{rooms.date}</p>
                                    <p class="text mb-2"><b class="card-txt">START TIME : </b>{rooms.starttime}</p>
                                    <p class="text mb-2"><b class="card-txt">END TIME : </b>{rooms.endtime}</p>
                                </div>
                            </div>
                        </div>
                    })
                }
            
            </div>
        </div>

    )
}

export default Customerdetails