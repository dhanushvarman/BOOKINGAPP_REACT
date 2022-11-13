import { useFormik } from "formik";
import React from "react";
import axios from 'axios'
import { Link, useParams } from "react-router-dom";
import { config } from "./config";


function Createrooms() {

    const params = useParams();

    const formik = useFormik({
        initialValues: {
            hotelname: "",
            roomname: "",
            price:"",
            seats:"",
            amenities:""
            
        },
        validate: (values) => {
            let error = {};

            if (!values.hotelname) {
                error.hotelname = "Please enter a Hotel name";
            }
            if (values.hotelname && (values.hotelname.length <= 2 || values.hotelname.length > 15)) {
                error.hotelname = "Hotel name must be between 3 to 15 characters";
            }
            if (!values.roomname) {
                error.roomname = "Please enter a Room name";
            }
            if (values.roomname && (values.roomname.length <= 2 || values.roomname.length > 15)) {
                error.roomname = "Room name must be between 3 to 15 characters";
            }
            if(values.seats < 2){
                error.seats = "Please Seat atleast two seats";
            }

            return error;
        },
        onSubmit:async(values)=>{
            try {
                await axios.post(`${config.api}/createroom`,values);
                alert("Room Created Successfully");
                formik.resetForm()
            } catch (error) {
                alert("Something Went Wrong")
            }
        }
    });

    console.log(formik.values);

    return (
        <>
            <div className="container mt-5">
                <h3
                    className="text-center p-2"
                    style={{ backgroundColor: "grey", color: "whitesmoke" }}
                >
                    Create Rooms Here !!
                </h3>
            </div>
            <div className="container mt-5">
                <div className="row mt-3">
                    <div className="col-md-2">
                        <Link to={"/availablerooms"} className="btn btn-primary mb-3">
                            <i class="fa-solid fa-sm fa-left-long mr-1"></i>BACK
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <div className="col-md-4">
                            <label>HOTEL NAME :</label>
                            <input
                                className={`form-control ${formik.errors.hotelname ? 'error-box' : ''
                                    } ${formik.touched.hotelname && !formik.errors.hotelname
                                        ? 'success-box'
                                        : ''
                                    }`}
                                type={"text"}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name="hotelname"
                                value={formik.values.hotelname}
                                placeholder={"Enter Hotel name here..."}
                            ></input>
                            {
                                formik.errors.hotelname ? <span style={{ color: "red" }}>{formik.errors.hotelname}</span> : null
                            }
                        </div>
                        <div className="col-md-4">
                            <label>ROOM NAME :</label>
                            <input
                                className={`form-control ${formik.errors.roomname ? 'error-box' : ''
                                    } ${formik.touched.roomname && !formik.errors.roomname
                                        ? 'success-box'
                                        : ''
                                    }`}
                                type={"text"}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name="roomname"
                                value={formik.values.roomname}
                                placeholder={"Enter Room name here..."}
                            ></input>
                            {
                                formik.errors.roomname ? <span style={{ color: "red" }}>{formik.errors.roomname}</span> : null
                            }
                        </div>
                        <div className="col-md-4">
                            <label>PRICE :</label>
                            <input
                                className="form-control"
                                type={"number"}
                                onChange={formik.handleChange}
                                name="price"
                                value={formik.values.price}
                                placeholder={"Price per hour"}
                            ></input>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-8">
                            <label>AMENITES :</label>
                            <input
                                className="form-control"
                                type={"text"}
                                onChange={formik.handleChange}
                                name="amenities"
                                value={formik.values.amenities}
                                placeholder={"Example: Tv, Fridge, Air conditioner,..."}
                            ></input>
                        </div>
                        <div className="col-md-2">
                            <label>SEATS :</label>
                            <input
                                className={`form-control ${formik.errors.seats ? 'error-box' : ''
                            } ${formik.touched.seats && !formik.errors.seats
                                ? 'success-box'
                                : ''
                            }`}
                                type={"number"}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                name="seats"
                                value={formik.values.seats}
                            ></input>
                            {
                                formik.errors.seats ? <span style={{ color: "red" }}>{formik.errors.seats}</span> : null
                            }
                        </div>
                        
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-2">
                            <input
                                type={"submit"}
                                value={"SUBMIT"}
                                className="btn  btn-success mt-2"
                            ></input>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Createrooms