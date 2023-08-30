import React, { useEffect, useState } from "react";
import { getContractList } from "../../services/ContractService";

const ContractList = () => {
    const [contractList, setContractList] = useState();
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState();
    const getAll = async () => {
        const result = await getContractList(page);
        setContractList((pre) => result.data);
        setTotalPage(Math.ceil(result.headers['x-total-count'] / 3));
    }
    useEffect(() => {
        getAll();
    }, [page])
    const previousPage = () => {
        if (page > 1) {
            setPage((pre) => pre - 1)
        }
    }
    const nextPage = () => {
        if (page < totalPage) {
            setPage((pre) => pre + 1)
        }
    }

    if (!contractList) {
        return null;
    }
    return (
        <>

            <div className="container mx-auto mt-5 mb-5">
                <div className="d-flex justify-content-center mb-5">
                    <h1>Contract List</h1>
                </div>
                <table className="table table-hover table-striped ">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Contract code</th>
                            <th scope="col">Facility code</th>
                            <th scope="col">Start date time</th>
                            <th scope="col">End date time</th>
                            <th scope="col">Deposit</th>
                            <th scope="col">Total payment</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contractList.map((contract, index) => {
                            return (
                                <tr key={`CL_${index}`}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{contract.contract_code}</td>
                                    <td>{contract.facility_code}</td>
                                    <td>{contract.start_date}</td>
                                    <td>{contract.end_date}</td>
                                    <td>$ {contract.deposit}</td>
                                    <td>$ {contract.total_payment}</td>
                                    <td>
                                        <button className="btn btn-outline-success">Detail</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className="d-flex justify-content-center mx-auto">
                    <nav aria-label="Page navigation example ">
                        <ul class="pagination">
                            <li class="page-item"><span class="page-link" onClick={() => previousPage()} href="#">Previous</span></li>
                            <li class="page-item"><span class="page-link" href="#">{page}</span></li>
                            <li class="page-item"><span class="page-link" href="#">{totalPage}</span></li>
                            <li class="page-item"><span class="page-link" onClick={() => nextPage()} href="#">Next</span></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default ContractList;