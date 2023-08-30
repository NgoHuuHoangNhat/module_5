import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import * as facilityService from '../../services/FacilityService';
import { Link } from "react-router-dom";
import Modal from "../../common/Modal";

const FacilityList = () => {
    const [facilityList, setFacilityList] = useState([]);
    const [totalFacility, setTotalFacility] = useState(0);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [totalPage, setTotalPage] = useState(0);
    const [dataModal, setDataModal] = useState({
        show: false,
        data: null
    });
    const showModal = (value) => {
        setDataModal({
            show: true,
            data: value
        })
    }

    const onDeleteFacility = async () => {
        // const result = facilityService.removeFacility(dataModal.data.id);
        console.log(dataModal.data);
        setDataModal((pre)=>({
            show: false,
            data: null
        }));
        getAllFacilityList();
    }

    const onCloseModal = () => {
        setDataModal((pre)=>({
            show: false,
            data: null
        }))
    }
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
        setPage((prev) => 1);
    }

    useEffect(() => {
        getAllFacilityList();

    }, [search, page])

    return (
        <>
            <div>
                <h1 className="text-center mt-4">List Facility</h1>
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


                <div>
                    <div className="container-fluid " style={{ marginTop: "2rem", }}>
                        <div className="mx-auto row" style={{ width: "90%", }}>

                            <table className="table table-houver">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Standard</th>
                                        <th>Max person</th>
                                        <th>Fee</th>
                                        <th className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {facilityList.map((facility, index) => {
                                        return (
                                            <tr key={`F_${index}`}>
                                                <td>{index + 1}</td>
                                                <td>{facility.name}</td>
                                                <td>{facility.room_standard}</td>
                                                <td>{facility.max_person}</td>
                                                <td>{facility.fee}</td>
                                                <td className="d-flex justify-content-center ">

                                                    <Link to={`/facility/update/${facility.id}`}>
                                                        <button className="btn btn-outline-success me-4">
                                                            Update
                                                        </button>
                                                    </Link>

                                                    <button className="btn btn-outline-danger"
                                                        onClick={() => showModal(`${facility}`)}
                                                    >Delete</button>

                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>

                            {totalFacility !== 0 ? <div className="d-flex justify-content-center mx-auto">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item"><a className="page-link" onClick={() => previosPage()} >Previous</a></li>
                                        <li className="page-item"><span className="page-link" >{page !== 0 ? page : ""}</span></li>
                                        <li className="page-item"><span className="page-link" >{Math.ceil(totalFacility / 3)}</span></li>
                                        <li className="page-item"><a className="page-link" onClick={() => nextPage()} >Next</a></li>
                                    </ul>
                                </nav>
                            </div> : "Facility list is empty"}

                            {dataModal.show  && (
                                <Modal msg={`Do you want to delete ${dataModal.data.name}`}
                                    title={`Delete Facility`}
                                    onClose={() => onCloseModal()}
                                    onDelete={() => onDeleteFacility()} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FacilityList;