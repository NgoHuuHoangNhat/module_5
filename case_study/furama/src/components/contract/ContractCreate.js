import React from "react";

const ContractCreate = () => {
    return (
        <>

            <div className="container row mx-auto mt-5">

                <div className="col-lg-5 col-md-5 col-sm-12 d-flex justify-content-center row">
                    <img className="col-md-6 col-sm-12 border mx-4" style={{ maxWidth:"40%",  maxHeight: "40%"}}
                        src="https://media.istockphoto.com/id/1324356458/vector/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-logo-web-interface-and.jpg?s=612x612&w=0&k=20&c=ZmXO4mSgNDPzDRX-F8OKCfmMqqHpqMV6jiNi00Ye7rE=" alt="defalut"></img>
                    <img className="col-md-6 col-sm-12 border mx-4" style={{ maxWidth:"40%",  maxHeight: "40%"}}
                        src="https://media.istockphoto.com/id/1324356458/vector/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-logo-web-interface-and.jpg?s=612x612&w=0&k=20&c=ZmXO4mSgNDPzDRX-F8OKCfmMqqHpqMV6jiNi00Ye7rE=" alt="defalut"></img>
                    <img className="col-md-6 col-sm-12 border mx-4" style={{ maxWidth:"40%",  maxHeight: "40%"}}
                        src="https://media.istockphoto.com/id/1324356458/vector/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-logo-web-interface-and.jpg?s=612x612&w=0&k=20&c=ZmXO4mSgNDPzDRX-F8OKCfmMqqHpqMV6jiNi00Ye7rE=" alt="defalut"></img>
                    <img className="col-md-6 col-sm-12 border mx-4" style={{ maxWidth:"40%",  maxHeight: "40%"}}
                        src="https://media.istockphoto.com/id/1324356458/vector/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-logo-web-interface-and.jpg?s=612x612&w=0&k=20&c=ZmXO4mSgNDPzDRX-F8OKCfmMqqHpqMV6jiNi00Ye7rE=" alt="defalut"></img>
                </div>
                <div className="mx-auto col-lg-7 col-md-7 col-sm-12 d-flex justify-content-center mt-5">
                    <section className="mb-4 w-75 shadow-lg p-3 mb-5 bg-body-tertiary rounded">

                        <h2 className="h1-responsive font-weight-bold text-center my-4">Contract Service</h2>

                        <p className="text-center w-responsive mx-auto mb-3">Service contract at Furama Resort, please double check before saving</p>

                        <div className="row">

                            <div className="col-md-6 col-sm-12 mb-3">
                                <div className="md-form mb-0">
                                    <label htmlFor="contractCode" className="">Contract code</label>
                                    <input type="text" id="contractCode" name="contractCode" className="form-control" />

                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 mb-3">
                                <div className="md-form mb-0">
                                    <label htmlFor="customerCode" className="">Customer code</label>
                                    <input type="text" id="customerCode" name="customerCode" className="form-control" />

                                </div>
                            </div>


                            <div className="col-md-6 col-sm-12 mb-3">
                                <div className="md-form mb-0">
                                    <label htmlFor="startDate" className="">Start date</label>
                                    <input type="datetime-local" id="startDate" name="startDate" className="form-control" />

                                </div>
                            </div>

                            <div className="col-md-6 col-sm-12 mb-3">
                                <div className="md-form mb-0">
                                    <label htmlFor="endDate" className="">End date</label>
                                    <input type="datetime-local" id="endDate" name="endDate" className="form-control" />

                                </div>
                            </div>


                            <div className="col-md-6 col-sm-12 mb-3">

                                <div className="md-form">
                                    <label htmlFor="deposit">Deposit</label>
                                    <input type="number" id="deposit" name="deposit" rows="2"
                                        className="form-control md-textarea"></input>

                                </div>

                            </div>
                            <div className="col-md-6 col-sm-12 mb-3">

                                <div className="md-form">
                                    <label htmlFor="totalPayment">Total payment</label>
                                    <input type="number" id="totalPayment" name="totalPayment" rows="2"
                                        className="form-control md-textarea"></input>

                                </div>

                            </div>
                        </div>


                        <button className="btn btn-dark w-100 col-md-12 mt-3">Send</button>




                    </section>

                </div>
            </div>
        </>
    )
}

export default ContractCreate;
