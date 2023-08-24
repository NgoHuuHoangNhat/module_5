import React from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import * as libraryService from '../services/LibraryService';


const CreateBook = () => {
    const navigate = useNavigate();

    const addNewBook = async (values) => {
        const status = await libraryService.addNewBook(values);
        return status;
    }

    return (

        <>
            <h1>Add new book</h1>
            <Formik
                initialValues={{
                    title: "",
                    quantity: "0"
                }}

                validationSchema={Yup.object({
                    title: Yup.string()
                        .required("title is not empty"),
                    quantity: Yup.number()
                        .required("quantity is not empty")
                })}
                onSubmit={async (values, { setSubmitting }) => {
                    setSubmitting(false);
                    const status = await addNewBook(values);
                    navigate('/')
                    alert(status === 201 ? 'create success' : 'create failed')
                }}
            >
                <Form>
                    <div for='title'>Title</div>
                    <Field id='title' name='title' />
                    <ErrorMessage component='small' name='title' /><br />
                    <div>Quantity</div>
                    <Field id='quantity' name='quantity' />
                    <ErrorMessage component='small' name='quantity' /><br />
                    <button>Submit</button>
                </Form>
            </Formik>
        </>
    )
}

export default CreateBook;