import React from "react";
import ReactDOM from "react-dom";

const FacilityList = () => {
    return (
        <>
            {/* carousel */}

            <div id="carouselExampleAutoplaying" className="carousel slide mx-auto" style={{ width: "100%", height: "750px", }}
                data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://furamavietnam.com/wp-content/uploads/2019/07/Vietnam_Danang_Furama_Resort_Exterior_Ocean-Pool-6.jpg"
                            className="d-block w-100" alt="..." style={{ height: "750px", }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://thitruongdiaoc.vn/uploads/blog_guest/images/2023/05/11/346105558-552063867078596-2035097706647536157-n-1683772450.jpg"
                            className="d-block w-100" alt="..." style={{ height: "750px", }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://fantasea.vn/wp-content/uploads/2017/10/Furama-%C4%90%C3%A0-N%E1%BA%B5ng-Resort.jpg"
                            className="d-block w-100" alt="..." style={{ height: "750px", }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* carousel */}

            <div className="container-fluid mt-5">
                <div className="mx-auto row" style={{ width: "70%", }}>

                    <div className="col-lg-4">
                        <h2 style={{ fontFamily: "Noto Sans Chorasmian, sans-serif", }}>
                        THIS WORLD CLASS RESORT, FURAMA DANANG, REPUTABLE FOR BEING A CULINARY RESORT IN VIETNAM
                        </h2>
                    </div>
                    <div className="col-lg-4">
                        <img style={{ width: "100%", height: "80%", }}
                            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/64070770.jpg?k=ce1076774c466b0dd46e779f46aed196cc4afa8eb66e7085ae94c2e2ff9414c2&o=&hp=1"/>
                    </div>
                    <div className="col-lg-4">
                        <p>Overlooking the long stretch of wide white sand on Danang Beach, 
                            Furama Resort Danang is a gateway to three World Heritage Sites of 
                            Hoi An (20 minutes), My Son (90 minutes) and Hue (2 hours). 
                            The 198 rooms and suites plus 70 two to four bedroom pool villas
                             feature tasteful décor, designed with traditional Vietnamese style 
                             and a touch of French colonial architecture and guarantee the Vietnam’s 
                             the most prestigious resort -counting royalty, presidents, movie stars and international 
                             business leaders among its celebrity guests.    </p>
                    </div>
                </div>
            </div>

            {/* card */}

            <div className="container-fluid">
                <div>
                    <div className="container-fluid " style={{ marginTop: "2rem", }}>
                        <div className="mx-auto row" style={{ width: "90%", }}>
                            <div className=" col-lg-4 col-md-4 col-sm-6 pb-5">
                                <div className="card" style={{ width: "25rem", }}>
                                    <img src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
                                        className="card-img-top" alt="..." style={{ width: "100%", }} />
                                    <div className="card-body">
                                        <h5 className="card-title">Room 1</h5>
                                        <p className="card-text">
                                            Area: 85.5 m<sup>2</sup>
                                            Price: $ 200
                                        </p>
                                        <a href="#" className="btn btn-primary mx-2">Booking</a>
                                        <a href="#" className="btn btn-primary">Detail</a>
                                    </div>
                                </div>
                            </div>

                            <div className=" col-lg-4 col-md-4 col-sm-6 pb-5">
                                <div className="card" style={{ width: "25rem", }}>
                                    <img src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg"
                                        className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Villa 1</h5>
                                        <p className="card-text">
                                            Area: 85.5 m<sup>2</sup>
                                            Price: $ 200
                                        </p>
                                        <a href="#" className="btn btn-primary mx-2">Booking</a>
                                        <a href="#" className="btn btn-primary">Detail</a>
                                    </div>
                                </div>
                            </div>

                            <div className=" col-lg-4 col-md-4 col-sm-6 pb-5">
                                <div className="card" style={{ width: "25rem", }}>
                                    <img src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Ocean_Deluxe-2-450x291.jpg"
                                        className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">House 1</h5>
                                        <p className="card-text">
                                            Area: 85.5 m<sup>2</sup>
                                            Price: $ 200
                                        </p>
                                        <a href="#" className="btn btn-primary mx-2">Booking</a>
                                        <a href="#" className="btn btn-primary">Detail</a>
                                    </div>
                                </div>
                            </div>

                            <div className=" col-lg-4 col-md-4 col-sm-6 pb-5">
                                <div className="card" style={{ width: "25rem", }}>
                                    <img src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
                                        className="card-img-top" alt="..." style={{ width: "100%", }} />
                                    <div className="card-body">
                                        <h5 className="card-title">Room 1</h5>
                                        <p className="card-text">
                                            Area: 85.5 m<sup>2</sup>
                                            Price: $ 200
                                        </p>
                                        <a href="#" className="btn btn-primary mx-2">Booking</a>
                                        <a href="#" className="btn btn-primary">Detail</a>
                                    </div>
                                </div>
                            </div>

                            <div className=" col-lg-4 col-md-4 col-sm-6 pb-5">
                                <div className="card" style={{ width: "25rem", }}>
                                    <img src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg"
                                        className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Villa 1</h5>
                                        <p className="card-text">
                                            Area: 85.5 m<sup>2</sup>
                                            Price: $ 200
                                        </p>
                                        <a href="#" className="btn btn-primary mx-2">Booking</a>
                                        <a href="#" className="btn btn-primary">Detail</a>
                                    </div>
                                </div>
                            </div>

                            <div className=" col-lg-4 col-md-4 col-sm-6 pb-5">
                                <div className="card" style={{ width: "25rem", }}>
                                    <img src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Ocean_Deluxe-2-450x291.jpg"
                                        className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">House 1</h5>
                                        <p className="card-text">
                                            Area: 85.5 m<sup>2</sup>
                                            Price: $ 200
                                        </p>
                                        <a href="#" className="btn btn-primary mx-2">Booking</a>
                                        <a href="#" className="btn btn-primary">Detail</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default FacilityList;