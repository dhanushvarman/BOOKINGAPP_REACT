import { useFormik } from "formik";
import React from "react";
import axios from 'axios'
import { Link, useParams } from "react-router-dom";
import { config } from "./config";

function Booking() {
    const params = useParams();

    const formik = useFormik({
        initialValues: {
            customername: "",
            date: "",
            starttime: "",
            endtime: "",
        },
        validate: (values) => {
            let error = {};

            if (!values.customername) {
                error.customername = "Please enter a name";
            }
            if (values.customername && (values.customername.length <= 2 || values.customername.length > 15)) {
                error.customername = "Name must be between 3 to 15 characters";
            }

            return error;
        },
        onSubmit:async(values)=>{
            try {
                values.status = "Booked";
                await axios.put(`${config.api}/bookingroom/${params.roomId}`,values);
                alert("Room Booked Successfully");
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
                    Welcome to Booking Page
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
                            <label>CUSTOMER NAME :</label>
                            <input
                                className={`form-control ${formik.errors.customername ? 'error-box' : ''
                                    } ${formik.touched.customername && !formik.errors.customername
                                        ? 'success-box'
                                        : ''
                                    }`}
                                type={"text"}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name="customername"
                                value={formik.values.customername}
                                placeholder={"Enter name here..."}
                            ></input>
                            {
                                formik.errors.customername ? <span style={{ color: "red" }}>{formik.errors.customername}</span> : null
                            }
                        </div>
                        <div className="col-md-4">
                            <label>DATE :</label>
                            <input
                                className="form-control"
                                type={"date"}
                                onChange={formik.handleChange}
                                name="date"
                                value={formik.values.date}
                            ></input>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-4">
                            <label>START TIME :</label>
                            <input
                                className="form-control"
                                type={"time"}
                                onChange={formik.handleChange}
                                name="starttime"
                                value={formik.values.starttime}
                            ></input>
                        </div>
                        <div className="col-md-4">
                            <label>END TIME :</label>
                            <input
                                className="form-control"
                                type={"time"}
                                onChange={formik.handleChange}
                                name="endtime"
                                value={formik.values.endtime}
                            ></input>
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

export default Booking;
