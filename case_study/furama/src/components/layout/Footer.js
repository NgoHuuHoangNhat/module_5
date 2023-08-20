import React from "react";
import ReactDOM from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
    return (
        <footer className="text-center text-lg-start text-muted" style={{borderTop: "1px solid black"}}>

            {/* Section: Links  */}
            <section className="" style={{ backgroundColor:"white", }}>
                <div className="container text-center text-md-start">
                    {/* Grid row */}
                    <div className="row mt-3 d-flex justify-content-center">
                        {/* Grid column */}
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            {/* Content */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i>Furama Resort
                            </h6>
                            <p>
                                Whether you are looking for a short weekend getaway or a
                                longer stay, we offer a wide range of packages that will cater to everyone..
                            </p>
                        </div>
                        {/* Grid column */}

                        {/* Grid column */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* Links */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Room</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">House</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Villa</a>
                            </p>

                        </div>
                        {/* Grid column */}

                        {/* Grid column */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* Links */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                Service
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Buy facility</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Rent facility</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Other</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Help</a>
                            </p>
                        </div>
                        {/* Grid column */}

                        {/* Grid column */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            {/* Links */}
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><FontAwesomeIcon icon={faHouse} />&nbsp;103 - 105 Vo Nguyen Giap Street, Khue My Ward, Ngu Hanh Son District, Danang City, Vietnam</p>
                            <p>
                            <FontAwesomeIcon icon={faEnvelope} />&nbsp;furama2023@gmail.com</p>
                            <p><FontAwesomeIcon icon={faPhone} />&nbsp;Tel: 84-236-3847 333/888</p>
                            <p><FontAwesomeIcon icon={faPrint} />&nbsp;Fax: 84-236-3847 666</p>
                        </div>
                        {/* Grid column */}
                    </div>
                    {/* Grid row */}
                </div>
            </section>
            {/* Section: Links  */}

            {/* Copyright */}
            <div className="text-center p-4 bg-dark text-light">
                © 2023 Furama Resort
            </div>
            {/* Copyright */}
        </footer>
    )
}

export default Footer;