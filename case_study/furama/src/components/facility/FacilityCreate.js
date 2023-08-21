import React from "react";
import ReactDOM from "react-dom";

const FacilityCreate = () => {
    return (
        <>
         <div className=" container-fluid d-flex justify-content-center mt-5 mb-5">
                    <h1>Insert Facility</h1>
                </div>
            <div className="mt-5 mb-5 container-fluid">
               

                <div className="row mx-auto">
                    <div className="col-lg-5 col-sm-12 d-flex justify-content-center row">
                        <img className="col-md-6 col-sm-12 border mx-4" style={{ maxWidth: "40%", maxHeight: "40%"}}
                            src="https://media.istockphoto.com/id/1324356458/vector/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-logo-web-interface-and.jpg?s=612x612&w=0&k=20&c=ZmXO4mSgNDPzDRX-F8OKCfmMqqHpqMV6jiNi00Ye7rE=" alt="defalut"></img>
                        <img className="col-md-6 col-sm-12 border mx-4" style={{ maxWidth: "40%", maxHeight: "40%"}}
                            src="https://media.istockphoto.com/id/1324356458/vector/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-logo-web-interface-and.jpg?s=612x612&w=0&k=20&c=ZmXO4mSgNDPzDRX-F8OKCfmMqqHpqMV6jiNi00Ye7rE=" alt="defalut"></img>
                        <img className="col-md-6 col-sm-12 border mx-4" style={{ maxWidth: "40%", maxHeight: "40%"}}
                            src="https://media.istockphoto.com/id/1324356458/vector/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-logo-web-interface-and.jpg?s=612x612&w=0&k=20&c=ZmXO4mSgNDPzDRX-F8OKCfmMqqHpqMV6jiNi00Ye7rE=" alt="defalut"></img>
                        <img className="col-md-6 col-sm-12 border mx-4" style={{ maxWidth: "40%", maxHeight: "40%"}}
                            src="https://media.istockphoto.com/id/1324356458/vector/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-logo-web-interface-and.jpg?s=612x612&w=0&k=20&c=ZmXO4mSgNDPzDRX-F8OKCfmMqqHpqMV6jiNi00Ye7rE=" alt="defalut"></img>
                    </div>
                    
                    <div className="container mx-auto my-2 d-flex justify-content-center w-50 bg-light shadow-lg rounded 
                    col-lg-7 col-sm-12">
                        <div className="row g-3 ">
                            <div className="col-md-12">
                                <label htmlFor="name" className="form-label">Facility name</label>
                                <input type="text" className="form-control" id="name" />
                            </div>

                            <div className="col-md-6 ">
                                <label htmlFor="inputCity" className="form-label">Type</label><br />
                                <input className="form-check-input" id="type" type="checkbox" /><label className="mx-2">&nbsp;Year</label>
                                <input className="form-check-input" id="type" type="checkbox" /><label className="mx-2">&nbsp;Month</label>
                                <input className="form-check-input" id="type" type="checkbox" /><label className="mx-2">&nbsp;Day</label>
                                <input className="form-check-input" id="type" type="checkbox" /><label className="mx-2">&nbsp;Hour</label>
                            </div>

                            <div className="col-6">
                                <label htmlFor="roomStandard" className="form-label">Room standard</label>
                                <input type="text" className="form-control" id="roomStandard" placeholder="room standard" />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="area" className="form-label">Facility area</label>
                                <input type="number" className="form-control" id="area" placeholder="area" />
                            </div>

                            <div className="col-6">
                                <label htmlFor="maxPersons" className="form-label">Max persons</label>
                                <input type="number" className="form-control" id="maxPersons" placeholder="max persons" />
                            </div>

                            <div className="col-4">
                                <label htmlFor="poolArea" className="form-label">Pool area</label>
                                <input type="number" className="form-control" id="poolArea" placeholder="pool area" />
                            </div>


                            <div className="col-md-4">
                                <label htmlFor="floorQuantity" className="form-label">Floor quantity</label>
                                <input type="number" className="form-control" id="floorQuantity" placeholder="floor quantity" />
                            </div>
                            <div className="col-4">
                                <label htmlFor="fee" className="form-label">Fee</label>
                                <input type="number" className="form-control" id="Fee" placeholder="fee" />
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
    )
}

export default FacilityCreate;