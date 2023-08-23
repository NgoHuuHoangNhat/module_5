import React from 'react';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import 'bootstrap/dist/css/bootstrap.css';
import * as Yup from 'yup';

const HealthDeclaration = () => {
    const err = {
        empty: "Không để trống"
    }


    return (
        <>
            <Formik

                initialValues={{
                    name: '',
                    idCard: '',
                    gender: '1',
                    dateOfBirth: '',
                    nationalty: '',
                    company: '',
                    workingParts: '',
                    insuranceCard: '',
                    province: '',
                    district: '',
                    wards: '',
                    address: '',
                    phoneNumber: '',
                    email: '',
                    where: '',
                    signal: []

                }}

                validationSchema={Yup.object({
                    
                    name: Yup.string()
                        .required(err.empty + " tên"),

                    idCard: Yup.string()
                        .required(err.empty + " hộ chiếu"),

                    dateOfBirth: Yup.date()
                        .required(err.empty + " năm sinh")
                        .min(new Date('1900-01-01'), "Ngày sinh phải sau năm 1990")
                    ,
                    nationalty: Yup.string()
                        .required(err.empty + " quốc gia"),

                    province: Yup.string()
                        .required(err.empty + " tỉnh thành"),

                    district: Yup.string()
                        .required(err.empty + " quận/huyện"),

                    wards: Yup.string()
                        .required(err.empty + " phường/xã"),

                    address: Yup.string()
                        .required(err.empty + " Số nhà, phố, tổ dân phố /thôn /đội"),

                    phoneNumber: Yup.string()
                        .required(err.empty + " số điện thoại"),

                    email: Yup.string()
                        .required(err.empty + " email")
                        .matches(/^[a-zA-Z0-9+-]+@[a-zA-Z0-9-.]+$/, "Email không khớp"),

                })}

                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                    console.log(values);
                }}
            >
                <Form>
                    <h1>Tờ Khai Y Tế</h1>
                    <div className='row mx-auto container-fluid'>
                        {/* info */}
                        <div className='col-md-4'>
                            <h2>Thông tin cá nhân</h2>
                            <div>
                                {/* input name */}
                                <div>
                                    <label>Họ tên</label><br />
                                    <Field name='name' id='name' type='text' /><br />
                                    <ErrorMessage component='span' name='name' className='err' />
                                </div>

                                {/* input id card */}
                                <div>
                                    <label>Hộ chiếu</label><br />
                                    <Field name='idCard' id='idCard' type='text' /><br />
                                    <ErrorMessage component='span' name='idCard' className='err' />
                                </div>

                                {/* input gender */}
                                <div>
                                    <label>Giới tính</label><br />
                                    <Field name='gender' id='gender' type='radio' value='1' /><br />
                                    <label>Nam</label><br />
                                    <Field name='gender' id='gender' type='radio' value='0' /><br />
                                    <label>Nữ</label><br />

                                </div>
                                {/* input date of birth */}
                                <div>
                                    <label>Năm sinh</label><br />
                                    <Field type='date' name='dateOfBirth' id='dateOfBirth' /><br />
                                    <ErrorMessage component='span' name='dateOfBirth' className='err' />
                                </div>

                                {/* nationality */}
                                <div>
                                    <label>Quốc tịch</label><br /><br />
                                    <Field name='nationalty' id='nationalty' type='text' /><br />

                                </div>

                                {/* company */}
                                <div>
                                    <label>Công ty làm việc</label><br />
                                    <Field name='company' id='company' type='text' /><br />

                                </div>

                                {/* working parts */}
                                <div>
                                    <label>Bộ phận làm việc</label><br />
                                    <Field name='workingParts' id='workingParts' type='text' /><br />

                                </div>

                                {/* insurance card */}
                                <div>
                                    <Field type='checkbox' name='insuranceCard' value='false' />
                                    <label>Có thẻ bảo hiểm y tế</label>
                                </div>

                            </div>
                        </div>


                        {/* Declaration------------------------------------------ */}
                        <div className='col-md-4'>
                            <h2>Địa chỉ liên lạc tại Việt Nam</h2>
                            {/* province */}
                            <div>
                                <label>Tỉnh thành </label><br />
                                <Field name='province' id='province' type='text' /><br />
                                <ErrorMessage component='span' name='province' className='err' />
                            </div>

                            {/* district */}
                            <div>
                                <label>Quận/huyện </label><br />
                                <Field name='district' id='district' type='text' /><br />
                                <ErrorMessage component='span' name='district' className='err' />
                            </div>

                            {/* wards */}
                            <div>
                                <label>Phường/xã</label><br />
                                <Field name='wards' id='wards' type='text' /><br />
                                <ErrorMessage component='span' name='wards' className='err' />
                            </div>

                            {/* address */}
                            <div>
                                <label>Số nhà, phố, tổ dân phố/thôn/đội</label><br />
                                <Field name='address' id='address' type='text' /><br />
                                <ErrorMessage component='span' name='address' className='err' />
                            </div>

                            {/* phone number */}
                            <div>
                                <label>Số điện thoại</label><br />
                                <Field name='phoneNumber' id='phoneNumber' type='number' /><br />
                                <ErrorMessage component='span' name='phoneNumber' className='err' />
                            </div>

                            {/* email */}
                            <div>
                                <label>Email</label><br />
                                <Field name='email' id='email' type='text' /><br />
                                <ErrorMessage component='span' name='email' className='err' />
                            </div>
                        </div>


                        {/* Declaration -----------------------------------------*/}
                        <div className='col-md-4'>
                            <h1>Khai báo y tế</h1>
                            {/* where */}
                            <div>
                                <h3>Trong vòng 14 ngày qua, anh/chị đã đến quốc gia,
                                    vùng lãnh thổ nào (Có thể đi qua nhiều quốc gia)</h3>

                                <Field as='textarea' name='where' id='where' />
                            </div>
                            <div>
                                <h3>Trong vòng 14 ngày qua, anh/chị có thấy xuất hiện dấu hiệu nào sau đây không?</h3>
                                <Field type='checkbox' name='sig    nal' value='Sốt' />
                                <label>Sốt</label><br />
                                <Field type='checkbox' name='signal' value='Ho' />
                                <label>Ho</label><br />
                                <Field type='checkbox' name='signal' value='Khó thở' />
                                <label>Khó thở</label><br />
                                <Field type='checkbox' name='signal' value='Viêm phổi' />
                                <label>Viêm phổi</label><br />
                                <Field type='checkbox' name='signal' value='Đau họng' />
                                <label>Đau hòng</label><br />
                                <Field type='checkbox' name='signal' value='Mệt mỏi' />
                                <label>Mệt mỏi </label>
                            </div>
                        </div>
                    </div>
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
        </>
    )
}

export default HealthDeclaration;