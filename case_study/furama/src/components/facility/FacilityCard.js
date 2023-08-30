import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import * as facilityService from '../../services/FacilityService';
import { Link } from "react-router-dom";

const FacilityCard = () => {
    const [facilityList, setFacilityList] = useState();
    const [totalFacility, setTotalFacility] = useState(0);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [totalPage, setTotalPage] = useState(0);

    const getAllFacilityList = async () => {
        const result = await facilityService.getAllFacilityList(page, search);
        setFacilityList(result.data);
        setTotalFacility(result.headers['x-total-count']);
        setTotalPage(Math.ceil(result.headers['x-total-count'] / 3));

    }
    const previosPage = () => {
        if (page > 1) {
            setPage((pre) => pre - 1);
        }
    }
    const nextPage = () => {

        if (page < totalPage) {
            setPage((pre) => pre + 1);
        }
    }
    const handleSearch = async () => {
        let searchName = document.getElementById('search').value;
        setSearch(searchName);
        setPage((prev) => 1)

    }

    useEffect(() => {
        getAllFacilityList();

    }, [search, page])


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

                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <h2 style={{ fontFamily: "Noto Sans Chorasmian, sans-serif", }}>
                            THIS WORLD CLASS RESORT, FURAMA DANANG, REPUTABLE FOR BEING A CULINARY RESORT IN VIETNAM
                        </h2>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <img style={{ width: "100%", height: "80%", }}
                            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/64070770.jpg?k=ce1076774c466b0dd46e779f46aed196cc4afa8eb66e7085ae94c2e2ff9414c2&o=&hp=1" />
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
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

            {/* search */}
            <div className="d-flex justify-content-end mx-auto container mt-5">
                <div className="input-group mb-3 w-50 ">
                    <input type="text" className="form-control" id='search'
                        placeholder="search facility" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button onClick={() => handleSearch()}
                        className="btn btn-outline-primary" type="button" id="button-addon2">Button</button>
                </div>
            </div>


            {/* card */}
            {facilityList && (
                <div className="container-fluid">
                    <div>
                        <div className="container-fluid " style={{ marginTop: "2rem", }}>

                            <div className="mx-auto row" style={{ width: "90%", }}>

                                {facilityList.map((facility, index) => {
                                    return (
                                        <div key={`f_${index}`} className="col-xl-4 col-lg-4 col-md-12 col-sm-12 pb-5">
                                            <div className="card" style={{ width: "25rem", }}>
                                                <img src={facility.image}
                                                    className="card-img-top img-fluid" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{facility.name}</h5>
                                                    <p className="card-text">
                                                        Area: {facility.facility_area} m<sup>2</sup><br />
                                                        Price: $ {facility.fee}
                                                    </p>
                                                    <Link to={`/contract/create/${facility.id}`}
                                                        className="btn btn-outline-dark mx-2">Booking</Link>
                                                    <div href="#" className="btn btn-outline-dark">Detail</div>
                                                </div>
                                            </div>
                                        </div>
                                    )

                                })}
                                {totalFacility > 1 ? <div className="d-flex justify-content-center mx-auto">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination">
                                            <li className="page-item"><a className="page-link" onClick={() => previosPage()} >Previous</a></li>
                                            <li className="page-item"><span className="page-link" >{page !== 0 ? page : ""}</span></li>
                                            <li className="page-item"><span className="page-link" >{totalPage}</span></li>
                                            <li className="page-item"><a className="page-link" onClick={() => nextPage()} >Next</a></li>
                                        </ul>
                                    </nav>
                                </div> : ""}
                            </div>
                        </div>
                    </div>
                </div >
            )}

        </>
    )
}

export default FacilityCard;