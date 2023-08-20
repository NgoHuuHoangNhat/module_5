import { text } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import ReactDOM from "react-dom";

const CustomerList = () => {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="d-flex justify-content-center mt-5 mb-4">
                    <h1>Customer List</h1>
                </div>
                <div>
                    <table className="table table-light table-hover table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Birthday</th>
                                <th scope="col">Phone number</th>
                                <th scope="col">Customer type</th>
                                <th scope="col" style={{textAlign: "center"}}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td style={{textAlign: "center"}}>
                                    <button type="button" className="btn btn-primary mx-2">Detail</button>
                                    <button type="button" className="btn btn-warning mx-2">Update</button>
                                    <button type="button" className="btn btn-danger mx-2">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td style={{textAlign: "center"}}>
                                    <button type="button" className="btn btn-primary mx-2">Detail</button>
                                    <button type="button" className="btn btn-warning mx-2">Update</button>
                                    <button type="button" className="btn btn-danger mx-2">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td style={{textAlign: "center"}}>
                                    <button type="button" className="btn btn-primary mx-2">Detail</button>
                                    <button type="button" className="btn btn-warning mx-2">Update</button>
                                    <button type="button" className="btn btn-danger mx-2">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td style={{textAlign: "center"}}>
                                    <button type="button" className="btn btn-primary mx-2">Detail</button>
                                    <button type="button" className="btn btn-warning mx-2">Update</button>
                                    <button type="button" className="btn btn-danger mx-2">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td style={{textAlign: "center"}}>
                                    <button type="button" className="btn btn-primary mx-2">Detail</button>
                                    <button type="button" className="btn btn-warning mx-2">Update</button>
                                    <button type="button" className="btn btn-danger mx-2">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="mx-auto d-flex justify-content-center mt-3 ">
                        <a href="#">Preios</a>&nbsp;&nbsp;<span>1 2 3</span>&nbsp;&nbsp;<a href="#">Next</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomerList;