import { Field, Formik, Form, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from 'yup';
import * as customerService from '../../services/CustomerService';
import { toast } from "react-toastify";
import { getAll } from "../../services/CustomerTypeService";
import { useNavigate, useParams } from "react-router-dom";

const CustomerUpdate = () => {
    const [customerTypeList, setCustomerTypeList] = useState();
    const [customer, setCustomer] = useState();
    const params = useParams();
    const navigate = useNavigate();
    const getCustomerById = async () => {
        const result = await customerService.findById(params.id);
        setCustomer(result.data[0]);
    }
    const getCustomerTypeList = async () => {
        const result = await getAll();
        setCustomerTypeList(result.data);
    }
    useEffect(() => {
        getCustomerTypeList();
        getCustomerById();
    }, [])
    const checkDuplicatePhoneNumber = async (value) => {
        const result = await customerService.findByPhoneNumber(value);
        if (result.data.length !== 0 && result.data[0].phone_number !== value) {
            return false;
        }
        return true;
    }

    const checkDuplicateIdCard = async (value) => {
        const result = await customerService.findByIdCard(value);
        if (result.data.length !== 0 && result.data[0].id_card !== value) {
            return false;
        }
        return true;
    }
    const checkDuplicateEmail = async (value) => {
        const result = await customerService.findByEmail(value);
        if (result.data.length !== 0 && result.data[0].email !== value) {
            return false;
        }
        return true;
    }
    const checkDuplicateCode = async (code) => {
        const result = await customerService.findByCode(code);
        if (result.data.length !== 0 && result.data[0].code !== code) {
            return false;
        }
        return true;
    }
    const updateCustomer = async (customer) => {
        const result = await customerService.updateCustomer(customer);
        if (result.data) {
            toast(`Add customer: ${customer.name} success`);
        } else {
            toast(`Add customer: ${customer.name} failed`);
        }
        return result;
    }
    const checkName = (name) => {
        if (name.trim() !== "") {
            let arr = name.split(" ");
            for (let word of arr) {
                if (/\d/.test(word)) {
                    return false;
                }
                if (word[0] !== word[0].toUpperCase()) {
                    return false;
                }
            }
            return true;
        }

    }

    if (!customerTypeList || !customer) {
        return null;
    }
    return (
        <>
            <Formik
                initialValues={{
                    id: customer?.id,
                    code: customer?.code,
                    name: customer?.name,
                    gender: customer?.gender,
                    birthday: customer?.birthday,
                    email: customer?.email,
                    id_card: customer?.id_card,
                    phone_number: customer?.phone_number,
                    type: JSON.stringify(customer?.type),
                    address: customer?.address
                }}
                validationSchema={Yup.object({
                    code: Yup.string()
                        .required("Code not empty")
                        .matches(/^C-\d{4}$/, 'Code not matches')
                        .test('check-duplicate-code', 'Code already exist', (value) => checkDuplicateCode(value)),

                    name: Yup.string()
                        .required("Name not empty")
                        .test('check-blank', 'Name must not be blank', (value) => value.trim().length !== 0)
                        .test('check-name', 'Name not contain numbers and capitalize the first letter ',
                            (value) => checkName(value))
                        .min(3, 'Name cannot be less than 3 character')
                        .max(100, 'Name cannot be more than 100 character'),


                    birthday: Yup.date()
                        .required('Birthday not empty')
                        .min(new Date(new Date().setFullYear(new Date().getFullYear() - 70)),'Age must be less than 70')
                        .max(new Date(new Date().setFullYear(new Date().getFullYear() - 18)), 'Age must be more 18')
                    ,

                    email: Yup.string()
                        .required("Email not empty")
                        .test('check-blank', 'Email must not be blank', (value) => value.trim().length !== 0)
                        .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]$/, "Email not matches")
                        .min(3, 'Email cannot be less than 3 character')
                        .max(100, 'Email cannot be more than 100 character')
                        .test('check-duplicate', 'Email already exist', (value) => checkDuplicateEmail(value)),
                    type: Yup.string()
                        .required("please select one option"),
                    id_card: Yup.string()
                        .required("Id card not empty")
                        .matches(/^\d{9}$|^\d{12}$/,'Id card is 9 or 12 numbers')
                        .test('check-blank', 'Id card must not be blank', (value) => value.trim().length !== 0)
                        .test('check-duplicate', 'Id card already exist', (value) => checkDuplicateIdCard(value)),
                    phone_number: Yup.string()
                        .required("Phone number not empty")
                        .test('check-blank', 'Phone number must not be blank', (value) => value.trim().length !== 0)
                        .matches(/((?:\(\+84\))|0)(90|91)\d{7}$/, 'Wrong phone number')
                        .test('check-duplicate', 'Phone number already exist', (value) => checkDuplicatePhoneNumber(value)),



                })}
                onSubmit={async (value, { setSubmitting }) => {
                    setSubmitting(false);
                    let cloneValue = {...value};
                    cloneValue.type = JSON.parse(value.type);
                    const result = await updateCustomer(cloneValue);
                    if (result.status === 200) {
                        navigate('/customer/list');
                    }
                }}
            >
                <Form>
                    <div className="mt-5 mb-5 ">
                        <div className="container-fluid container-fluid d-flex justify-content-center mt-5 mb-5">
                            <h1>Update Customer</h1>
                        </div>

                        <div className="container-fluid row mx-auto ">
                            <div className="col-lg-5 col-sm-12 d-flex justify-content-center">
                                <img style={{ maxWidth: "80%", maxHeight: "100%" }}
                                    src="https://phongreviews.com/wp-content/uploads/2022/11/avatar-facebook-mac-dinh-8.jpg" alt="defalut"></img>
                            </div>
                            <div className="container col-lg-7 col-sm-12 my-2 w-50 bg-light shadow-lg rounded">
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label htmlFor="name" className="form-label">Customer code</label>
                                        <Field type="text" className="form-control" id="code" name='code' />
                                        <div style={{ height: '10px' }}>
                                            <ErrorMessage className="text-danger" component='small' name='code' />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="name" className="form-label">Customer name</label>
                                        <Field type="text" className="form-control" id="name" name='name' />
                                        <div style={{ height: '10px' }}>
                                            <ErrorMessage className="text-danger" component='small' name='name' />
                                        </div>
                                    </div>

                                    <div className="col-md-6 ">
                                        <label className="form-label">Gender</label><br />
                                        <Field className="form-check-input" name='gender' value='true' id="man" type="radio" /><label htmlFor="man">&nbsp;Man</label>&nbsp;&nbsp;
                                        <Field className="form-check-input" name='gender' value='false' id="woman" type="radio" /><label htmlFor="woman">&nbsp;Woman</label>
                                        <div style={{ height: '10px' }}>
                                            <ErrorMessage className="text-danger" component='small' name='gender' />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="birthday" className="form-label">Birthday</label>
                                        <Field type="date" className="form-control" name='birthday' id="birthday" />
                                        <div style={{ height: '10px' }}>
                                            <ErrorMessage className="text-danger" component='small' name='birthday' />
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <Field type="email" className="form-control" name='email' id="email" placeholder="email" />
                                        <div style={{ height: '10px' }}>
                                            <ErrorMessage className="text-danger" component='small' name='email' />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="id_card" className="form-label">Id card</label>
                                        <Field type="text" name='id_card' className="form-control" id="id_card" placeholder="id card" />
                                        <div style={{ height: '10px' }}>
                                            <ErrorMessage className="text-danger" component='small' name='id_card' />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="phone_number" className="form-label">Phone number</label>
                                        <Field type="text" className="form-control" name='phone_number' id="phone_number" placeholder="phone number" />
                                        <div style={{ height: '10px' }}>
                                            <ErrorMessage className="text-danger" component='small' name='phone_number' />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <label className="form-label">Customer type</label>
                                        <Field as='select' name='type' className="form-select" aria-label="Default select example">
                                            {customerTypeList.map((type, index) => (
                                                <option key={`T_${index}`} value={JSON.stringify(type)}>{type.name}</option>
                                            ))}
                                        </Field>
                                        <div style={{ height: '10px' }}>
                                            <ErrorMessage className="text-danger" component='small' name='type' />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <label htmlFor="address" className="form-label">Address</label>
                                        <Field type="text" className="form-control" name='address' id="address" placeholder="address" />
                                        <div style={{ height: '10px' }}>
                                            <ErrorMessage className="text-danger" component='small' name='address' />
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <button type="submit" className="btn btn-dark w-100 ">Save</button>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </>
    );
}

export default CustomerUpdate;