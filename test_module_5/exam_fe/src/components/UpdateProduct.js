import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as productService from '../services/ProductService';
import * as productTypeService from '../services/ProductTypeService';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { toast } from "react-toastify";

const UpdateProduct = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [product, setProduct] = useState();
    const [productTypes, setProductTypes] = useState();
    const getProductById = async () => {
        const result = await productService.getProductById(params.id);
        setProduct(result.data);
    }
    const getProductTypes = async () => {
        const result = await productTypeService.getProductTypes();
        setProductTypes(result.data);
    }
    const updateProduct = async (value, setErrors) => {
        const result = await productService.updateProduct(value);
        if (result.status === 200) {
            toast(`Cập nhật ${value.name} thành công`);
            navigate("/")
        } else {
            setErrors(result.response.data);
        }

    }
    useEffect(() => {
        getProductById();
        getProductTypes();
    }, [])

    if (!product || !productTypes) {
        return null;
    }
    return (
        <>
            <Formik
                initialValues={{
                    id: product?.id,
                    code: product?.code,
                    name: product?.name,
                    date: product?.date,
                    quantity: product?.quantity,
                    clothesType: JSON.stringify(product?.clothesType)
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("tên không được để trống")
                        .max(100, "tên sản phẩm không được quá 100 kí tự"),
                    date: Yup.date()
                        .required("ngày nhập không được để trống")
                        .max(new Date(), "ngày nhập không được lớn hơn ngày hiện tại"),
                    quantity: Yup.number()
                        .required("số lượng không được để trống")
                        .positive("số lượng sản phẩm phải lớn hơn 0")
                        .integer("số lượng sản phẩm phải là số nguyên"),
                    // type: Yup.string()
                    //     .required("loại sản phẩm không được để trống")
                })}
                onSubmit={(values, { setSubmitting, setErrors }) => {
                    setSubmitting(false);
                    let cloneValues = {
                        ...values,
                        clothesType: JSON.parse(values.clothesType)
                    }
                    console.log(cloneValues);

                    updateProduct(cloneValues, setErrors);

                }}
            >
                <Form>


                    <div>
                        <h1 className='text-center mt-5'>Update Product</h1>
                        <div className='container mt-5 mb-5  bg-light shadow-lg rounded w-50'>
                            <div className='row '>
                                <div className="form-group col-md-12 col-xl-12 col-lg-12 col-sm-12 mb-3">
                                    <div htmlFor="name"><strong>Code: {product.code}</strong></div>

                                </div>
                                <div className="form-group col-md-12 col-xl-12 col-lg-12 col-sm-12">
                                    <label htmlFor="name">Tên sản phẩm</label>
                                    <Field type="name" className="form-control" name='name' id="name"
                                        placeholder="tên sản phẩm" />
                                    <div style={{ height: '20px' }}>
                                        <ErrorMessage className="text-danger" component='small' name='name' />
                                        <small></small>
                                    </div>
                                </div>
                                <div className="form-group col-md-12 col-xl-12 col-lg-12 col-sm-12">
                                    <label htmlFor="date">Ngày nhập</label>
                                    <Field type="date" className="form-control" name='date' id="date" />
                                    <div style={{ height: '20px' }}>
                                        <ErrorMessage className="text-danger" component='small' name='date' />
                                    </div>
                                </div>
                                <div className="form-group col-md-12 col-xl-12 col-lg-12 col-sm-12">
                                    <label htmlFor="quantity">Số lượng sản phẩm</label>
                                    <Field type="number" className="form-control" name='quantity' id="quantity"
                                    />
                                    <div style={{ height: '20px' }}>
                                        <ErrorMessage className="text-danger" component='small' name='quantity' />
                                    </div>
                                </div>

                                <div className="form-group col-md-12 col-xl-12 col-lg-12 col-sm-12">
                                    <label htmlFor="clothesType">Loại sản phẩm</label>
                                    <Field as='select' name='clothesType' id="clothesType" className="form-control">

                                        {productTypes.map((productType, index) => {
                                            return (
                                                <option key={`PT_${index}`} value={JSON.stringify(productType)}>{productType.name}</option>
                                            )

                                        })}
                                    </Field>
                                    <div style={{ height: '20px' }}>
                                        <ErrorMessage className="text-danger" component='small' name="'select" />
                                    </div>
                                </div>


                                <button type="submit" className="btn btn-dark mt-2">Cập nhật</button>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </>
    )
}
export default UpdateProduct;