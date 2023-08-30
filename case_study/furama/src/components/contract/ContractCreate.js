import { ErrorMessage, Form, Formik, Field } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as facilityService from "../../services/FacilityService";
import * as contractService from "../../services/ContractService";
import * as customerService from "../../services/CustomerService";
import * as Yup from 'yup';
import { toast } from "react-toastify";

const ContractCreate = () => {
    const navigate = useNavigate();
    const [facility, setFacility] = useState();
    const params = useParams();

    const addContract = async (value) => {
        const result = await contractService.addContract(value);
        if(result.status === 200){
            toast(`Add contract: ${value.name} success`);
            navigate('/');
        }else{
            toast(`Add contract: ${value.name} failed`);
        }
    }

    const getFacilityById = async () => {
        const result = await facilityService.findById(params.id);
        setFacility(result.data);
    }
    const checkDuplicateContractCode = async (code) => {
        const result = await contractService.findByCode(code);
        console.log(result);
        if (result.data.length !== 0) {
            return false;
        }
        return true;
    }
    const checkDuplicateCustomerCode = async (code) => {
        const result = await customerService.findByCode(code);
        if (result.data.length !== 0) {
            return true;
        }
        return false;
    }


    const checkEndDate = (value) => {
        const startDate = document.getElementById('start_date').value;
        if (new Date(startDate) >= new Date(value)) {
            return false;
        }
        return true;
    }

    const checkTotalPayment = (value) => {
        const depositInput = +document.getElementById('deposit').value;
        if (depositInput > value) {
            return false;
        }
        return true;
    }

    useEffect(() => {
        getFacilityById();
    }, [])
    if (!facility) {
        return null;
    }
    return (
        <>
            <Formik
                initialValues={{
                    contract_code: "",
                    facility_code: facility?.code,
                    customer_code: "",
                    start_date: "",
                    end_date: "",
                    deposit: 0,
                    total_payment: 0
                }}
                validationSchema={Yup.object({
                    contract_code: Yup.string()
                        .required("Contract Code not empty")
                        .matches(/^CC-\d{4}$/, 'Code not matches')
                        .test('check-duplicate-code', 'Contract Code already exist', (value) => checkDuplicateContractCode(value)),

                    customer_code: Yup.string()
                        .required("Customer code not empty")
                        .matches(/^C-\d{4}$/, 'Customer code not matches')
                        .test('check-duplicate-code', 'Customer code not exist', (value) => checkDuplicateCustomerCode(value)),
                    start_date: Yup.date()
                        .required("Start date not empty")
                        .min(new Date(), "Start date must be greater than current")
                        .max(new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
                            "Can only book within 1 year from now."),
                    end_date: Yup.date()
                        .required("Start date not empty")
                        .min(new Date(), "Start date must be greater than current")
                        .max(new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
                            "Can only book within 1 year from now.")
                        .test('check-end-date', 'End date must be more than start date', (value) => checkEndDate(value)),
                    deposit: Yup.number()
                        .required("Deposit not empty")
                        .positive("deposit is positive")
                        .min(50, "Deposit must be less than $ 50")
                        .max(1000, "Deposit must be more than $ 1000 "),
                    total_payment: Yup.number()
                        .required("Total payment not empty")
                        .positive("Total payment is positive")
                        .min(50, "Total payment must be less than $ 50")
                        .max(1000, "Total payment must be more than $ 1000 ")
                        .test('check-payment', 'Total payment must be more than deposit', (value) => checkTotalPayment(value))
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                    addContract(values);                    
                }}
            >
                <Form>
                    <div className="container row mx-auto mt-5">
                        <div className="col-lg-5 col-md-5 col-sm-12 d-flex justify-content-center row">
                            <img className="col-md-6 col-sm-12 border mx-4" style={{ width: "150%", height: "100%" }}
                                src="https://media.istockphoto.com/id/1324356458/vector/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-logo-web-interface-and.jpg?s=612x612&w=0&k=20&c=ZmXO4mSgNDPzDRX-F8OKCfmMqqHpqMV6jiNi00Ye7rE=" alt="defalut"></img>
                        </div>

                        <div className="mx-auto col-lg-7 col-md-7 col-sm-12 d-flex justify-content-center mt-5">
                            <section className="mb-4 w-75 shadow-lg p-3 mb-5 bg-body-tertiary rounded">

                                <h2 className="h1-responsive font-weight-bold text-center my-4">Contract Service</h2>

                                <p className="text-center w-responsive mx-auto mb-3">Service contract at Furama Resort, please double check before saving</p>

                                <div className="row">

                                    <div className="col-md-6 col-sm-12 mb-3">
                                        <div className="md-form mb-0">
                                            <label htmlFor="contract_code" className="">Contract code</label>
                                            <Field type="text" id="contractCode" name="contract_code" className="form-control" />
                                            <div style={{ height: '10px' }}>
                                                <ErrorMessage component='small' name="contract_code" className="text-danger" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 mb-3">
                                        <div className="md-form mb-0">
                                            <label htmlFor="customer_code" className="">Customer code</label>
                                            <Field type="text" id="customer_code" name="customer_code" className="form-control" />
                                            <div style={{ height: '10px' }}>
                                                <ErrorMessage component='small' name="customer_code" className="text-danger" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-md-6 col-sm-12 mb-3">
                                        <div className="md-form mb-0">
                                            <label htmlFor="start_date" className="">Start date</label>
                                            <Field type="datetime-local" id="start_date" name="start_date" className="form-control" />
                                            <div style={{ height: '10px' }}>
                                                <ErrorMessage component='small' name="start_date" className="text-danger" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-sm-12 mb-3">
                                        <div className="md-form mb-0">
                                            <label htmlFor="end_date" className="">End date</label>
                                            <Field type="datetime-local" id="end_date" name="end_date" className="form-control" />
                                            <div style={{ height: '10px' }}>
                                                <ErrorMessage component='small' name="end_date" className="text-danger" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 mb-3">
                                        <div className="md-form">
                                            <label htmlFor="deposit">Deposit</label>
                                            <Field type="number" id="deposit" name="deposit" rows="2"
                                                className="form-control md-textarea"></Field>
                                            <div style={{ height: '10px' }}>
                                                <ErrorMessage component='small' name="deposit" className="text-danger" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 mb-3">
                                        <div className="md-form">
                                            <label htmlFor="total_payment">Total payment</label>
                                            <Field type="number" id="total_payment" name="total_payment" rows="2"
                                                className="form-control md-textarea"></Field>
                                            <div style={{ height: '10px' }}>
                                                <ErrorMessage component='small' name="total_payment" className="text-danger" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <button className="btn btn-dark w-100 col-md-12 mt-3">Save</button>
                            </section>
                        </div>
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export default ContractCreate;
