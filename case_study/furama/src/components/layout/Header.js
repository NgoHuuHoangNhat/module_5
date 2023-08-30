import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div >
                    <Link className="navbar-brand" to="/" >
                        <img src="https://furamavietnam.com/wp-content/uploads/2018/08/logo@2x.png"
                            style={{ maxWidth: "10%", maxHeight: "10%" }} />
                        &nbsp;
                        FURAMA RESORT </Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ bsScrollHeight: "100px", }}>
                        <li className="nav-item dropdown">
                            <label className="nav-link dropdown-toggle" id="navbarScrollingDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Actions
                            </label>
                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><Link className="dropdown-item" to="facility/create">Create Facility</Link></li>
                                <li><Link className="dropdown-item" to="facility/list">List Facility</Link></li>
                                <li><Link className="dropdown-item" to="customer/create">Create Customer</Link></li>
                                <li><Link className="dropdown-item" to="customer/list">List Customer</Link></li>
                                <li><Link className="dropdown-item" to="contract/list">List Contract</Link></li>
                            </ul>
                        </li>



                    </ul>

                    <div className="d-flex">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ bsScrollHeight: "100px", }}>
                            <li className="nav-item">
                                <Link className="nav-link " to="#">Login</Link>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Header;