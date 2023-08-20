import React from "react";
import ReactDOM from "react-dom";

const CustomerCreate = () => {
    return (
        <>
            <div className="mt-5 mb-5">
                <div className="container-fluid container-fluid d-flex justify-content-center mt-5 mb-5">
                    <h1>Create Customer</h1>
                </div>

                <div className="container-fluid row mx-auto ">
                    <div className="col-lg-5 col-sm-12 d-flex justify-content-center">
                        <img style={{maxWidth: "80%", maxHeight: "100%"}}
                        src="https://phongreviews.com/wp-content/uploads/2022/11/avatar-facebook-mac-dinh-8.jpg" alt="defalut"></img>
                    </div>
                    <div className="container col-lg-7 col-sm-12 my-2 w-50 bg-light shadow-lg rounded">
                        <div className="row g-3">
                            <div className="col-md-12">
                                <label htmlFor="name" className="form-label">Customer name</label>
                                <input type="text" className="form-control" id="name" />
                            </div>

                            <div className="col-md-6 ">
                                <label className="form-label">Gender</label><br />
                                <input className="form-check-input" id="man" type="checkbox" /><label htmlFor="man">&nbsp;Man</label>&nbsp;&nbsp;
                                <input className="form-check-input" id="woman" type="checkbox" /><label htmlFor="woman">&nbsp;Woman</label>

                            </div>
                            <div className="col-6">
                                <label htmlFor="birthday" className="form-label">Birthday</label>
                                <input type="date" className="form-control" id="birthday" />
                            </div>

                            <div className="col-6">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="email" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="idCard" className="form-label">Id card</label>
                                <input type="text" className="form-control" id="idCard" placeholder="id card" />
                            </div>
                            <div className="col-6">
                                <label htmlFor="phoneNumber" className="form-label">Phone number</label>
                                <input type="text" className="form-control" id="phoneNumber" placeholder="phone number" />
                            </div>
                            <div className="col-6">
                                <label className="form-label">Customer type</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option value="1">Diamond</option>
                                    <option value="2">Platinium</option>
                                    <option value="3">Gold</option>
                                    <option value="3">Silver</option>
                                    <option value="3">Member</option>
                                </select>
                            </div>

                            <div className="col-md-12">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="text" className="form-control" id="address" placeholder="address" />
                            </div>

                            <div className="col-12">
                                <button type="submit" className="btn btn-dark w-100 ">Save</button>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CustomerCreate;