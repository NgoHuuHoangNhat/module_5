import React from "react";

const ContractList = () => {
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
                            <th scope="col">Facility name</th>
                            <th scope="col">Start date</th>
                            <th scope="col">End date</th>
                            <th scope="col">Deposit</th>
                            <th scope="col">Total payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>C-0001</td>
                            <td>RO-0001</td>
                            <td>Room 1</td>
                            <td>01-01-2020 12-12-12</td>
                            <td>01-01-2020 12-12-12</td>
                            <td>10 000 000</td>
                            <td>20 000 000</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>C-0002</td>
                            <td>HO-0001</td>
                            <td>House 1</td>
                            <td>01-01-2020 12-12-12</td>
                            <td>01-01-2020 12-12-12</td>
                            <td>10 000 000</td>
                            <td>20 000 000</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>C-0003</td>
                            <td>VL-0001</td>
                            <td>Villa 1</td>
                            <td>01-01-2020 12-12-12</td>
                            <td>01-01-2020 12-12-12</td>
                            <td>10 000 000</td>
                            <td>20 000 000</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>C-0004</td>
                            <td>RO-0004</td>
                            <td>Room 4</td>
                            <td>01-01-2020 12-12-12</td>
                            <td>01-01-2020 12-12-12</td>
                            <td>10 000 000</td>
                            <td>20 000 000</td>
                        </tr>

                    </tbody>
                </table>
                <div className="d-flex justify-content-center">
                    <span>Previos</span>&nbsp;
                    <span>1 / 1</span>&nbsp;
                    <span>Next</span>
                </div>
            </div>
        </>
    )
}

export default ContractList;