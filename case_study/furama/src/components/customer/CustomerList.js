import React, { useEffect, useState } from "react";
import * as customerService from '../../services/CustomerService';
import { Link } from "react-router-dom";
import Modal from "../../common/Modal";
import { toast } from "react-toastify";

const CustomerList = () => {
    const [customerList, setCustomerList] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [totalPage, setTotalPage] = useState(0);
    const [dataModal, setDataModal] = useState({
        show: false,
        data: null,
    })
    const getAllCustomer = async () => {
        const result = await customerService.getAllCustomer(page, search);
        setCustomerList(result.data);
        setTotalPage(Math.ceil(result.headers['x-total-count'] / 3));

    }
    useEffect(() => {

        getAllCustomer();
    }, [page, search])

    const showModal = (customer) => {
        console.log(customer);
        setDataModal({
            show: true,
            data: customer,
        })
    }
    const previousPage = () => {
        if (page > 1) {
            setPage((pre) => pre - 1)
        }
    }
    const handleSearch = () => {
        let searchName = document.getElementById('search').value;
        setSearch(searchName)
        setPage(1);
    }
    const nextPage = () => {
        if (page < totalPage) {
            setPage((pre) => pre + 1)
        }
    }
    const onCloseModal = () => {
        setDataModal({
            show: false,
            data: null
        })
    }
    const onDelete = async () => {
        const result = await customerService.deleteCustomer(dataModal.data.id);
        if (result.status === 200) {
            toast(`Customer: ${dataModal.data.name} has delete`);
            setDataModal({
                show: false,
                data: null
            })
            getAllCustomer();
        } else {
            toast(`Customer: ${dataModal.data.name} delete failed`);
        }

    }
    if (customerList.length === 0) {
        return null;
    }
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="d-flex justify-content-center mt-5 mb-4">
                    <h1>Customer List</h1>
                </div>
                {/* search */}
                <div className="d-flex justify-content-end mx-auto container mt-5">
                    <div className="input-group mb-3 w-50 ">
                        <input type="text" className="form-control" id='search'
                            placeholder="search customer" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button onClick={() => handleSearch()}
                            className="btn btn-outline-primary" type="button" id="button-addon2">Search</button>
                    </div>
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
                                <th scope="col" style={{ textAlign: "center" }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customerList.map((customer, index) => {
                                return (
                                    <>
                                        <tr key={`C_${index}`}>
                                            <td>{index + 1}</td>
                                            <td>{customer.name}</td>
                                            <td>{customer.birthday}</td>
                                            <td>{customer.phone_number}</td>
                                            <td>{customer.type.name}</td>
                                            <td className="d-flex justify-content-center">
                                                <Link to={`/customer/update/${customer.id}`}>
                                                    <button type="button" className="btn btn-outline-warning mx-2">Update</button>
                                                </Link>
                                                <button type="button"
                                                    onClick={() => showModal(customer)}
                                                    className="btn btn-outline-danger mx-2">Delete</button>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })}

                        </tbody>
                    </table>
                    {totalPage > 1 && <div className="mx-auto d-flex justify-content-center mt-3 ">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item"><span class="page-link" onClick={() => previousPage()} href="#">Previous</span></li>
                                <li class="page-item"><span class="page-link" href="#">{page}</span></li>
                                <li class="page-item"><span class="page-link" href="#">{totalPage}</span></li>
                                <li class="page-item"><span class="page-link" onClick={() => nextPage()} href="#">Next</span></li>
                            </ul>
                        </nav>
                    </div>}
                    {dataModal.show && (
                        <Modal title={`Delete Customer`}
                            msg={`Do you want delete: ${dataModal.data.name}`}
                            onClose={() => onCloseModal()}
                            onDelete={() => onDelete()}
                        />
                    )}
                </div>
            </div>
        </>
    )
}

export default CustomerList;