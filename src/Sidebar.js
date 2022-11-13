import React from 'react'
import { Link } from 'react-router-dom'


function Sidebar() {
    return (
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                
                <i class="fa-solid fa-lg fa-hotel"></i>
                
                <div class="sidebar-brand-text ml-3">ROOM BOOKING</div>
            </a>


            <hr class="sidebar-divider my-0" />


            <li class="nav-item active">
                <Link to={"/availablerooms"} class="nav-link">
                    <i class="fa-solid fa-bed"></i>
                    <span>Available Rooms</span>
                </Link>
            </li>


            <hr class="sidebar-divider" />


            <div class="sidebar-heading">
                ADMIN ACTIONS
            </div>


            <li class="nav-item">
                <Link to={"/bookedrooms"} class="nav-link">
                <i class="fa-solid fa-calendar-days"></i>
                    <span>Booked Rooms</span>
                </Link>
            </li>

            <li class="nav-item">
                <Link to={"/customerDetails"} class="nav-link">
                <i class="fa-solid fa-users"></i>
                    <span>Customer Details</span>
                </Link>
            </li>

            <li class="nav-item">
                <Link to={"/createrooms"} class="nav-link">
                <i class="fa-solid fa-circle-plus"></i>
                    <span>Create Rooms</span>
                </Link>
            </li>
        </ul>
    )
}

export default Sidebar