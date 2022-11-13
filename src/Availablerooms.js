import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { config } from "./config.js"

function Availablerooms() {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const roomDetails = await axios.get(`${config.api}/roomdetail`);
                setRooms(roomDetails.data)
            } catch (error) {
                alert("Something Went Wrong")
            }
        };
        fetchData();
    }, [])

    console.log(rooms)

    return (
        <div className='container'>
            <h3 className='text-center mt-4 p-2' style={{ backgroundColor: "grey", color: "whitesmoke" }}>Available Rooms</h3>
            <div className='row'>
                {
                    rooms.map((room) => {
                        return <div className='col-md-6 mt-4'>
                            <div class="card" >
                                <div class="card-body">
                                    <p className='text'><b class="card-txt">HOTEL NAME : </b>{room.hotelname}</p>
                                    <p class="text mb-2"><b class="card-txt">ROOM NAME : </b>{room.roomname}</p>
                                    <p className='text'><b class="card-txt">AMENITES : </b>{room.amenities}</p>
                                    <p className='text'><b class="card-txt">SEATS : </b>{room.seats}</p>
                                    <p className='text'><b class="card-txt">PRICE : </b>{room.price} <span style={{color:"grey"}}>per hour</span></p>
                                    {
                                        room.status ? <div className='text-center'><Link to={`/booking/${room._id}`} className={`btn btn-success disabled `}>ROOM BOOKED</Link></div>
                                            : <div className='text-center'><Link to={`/booking/${room._id}`} className={`btn btn-success `}>BOOK</Link></div>

                                    }
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Availablerooms