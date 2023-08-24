import React, { useEffect, useState } from 'react';
import * as libraryService from '../services/LibraryService';
import { useParams, useNavigate } from 'react-router-dom';
import { Formik, ErrorMessage, Form, Field } from 'formik';
import * as Yup from 'yup';


const EditBook = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [book, setBook] = useState({
        id: "231",
        title: "",
        quantity: "0"
    });

    const getById = async () => {
        const currentBook = await libraryService.getBookById(id);
        setBook(prev => ({...prev,...currentBook}));
        console.log(currentBook);
    }
    const updateBook = (book) => {
        const status = libraryService.updateBook(id, book);
        return status;
    }
    useEffect(() => {
        getById();
    }, [])

    return (

        <>
            <h1>Update book</h1>
            
            <Formik

                initialValues={{
                    myField: book   
                }}

                validationSchema={Yup.object({
                    title: Yup.string()
                        .required("title is not empty"),
                    quantity: Yup.number()
                        .required("quantity is not empty")
                })}
                onSubmit={async (values, { setSubmitting }) => {
                    setSubmitting(false);
                    updateBook(values);
                    navigate('/');
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
export default EditBook;