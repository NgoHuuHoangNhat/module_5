import React, { useEffect, useState } from 'react';
import * as todoService from '../services/TodoServices'
import { ErrorMessage, Field, Formik, Form } from 'formik';
import * as Yup from 'yup';

const TodoList = () => {

    const [todoList, setTodoList] = useState([]);


    useEffect( () => {
         getAll();
    },[])

    const getAll = async () => {
        const result = await todoService.getAll();
        setTodoList((prev) => result);
    }
    const insertWork = async (values) => {
        console.log(values);
        const status = await todoService.insertWork(values);
        document.getElementById('newWork').value = '';
        getAll();
        return status;
    }

    return (
        <>

            <h1>Todo List</h1>
            <Formik
                initialValues={{
                    userId: 1,
                    title: "",
                    completed: false
                }}

                validationSchema={Yup.object({
                    title: Yup.string()
                        .required("title is not empty")
                        
                })}

                onSubmit={async (values, { setSubmitting }) => {
                    setSubmitting(false);
                    alert("status code: " + await insertWork(values));
                }}
            >
                <Form>
                    <div>
                        <Field name="title" type='text' id='newWork' /><br />
                        <ErrorMessage component='small' name='title' style={{ color: 'red' }}></ErrorMessage>
                        <button>Submit</button>
                    </div>
                </Form>
            </Formik>
            <ul>
                {todoList.map((work, index) => (
                    <>
                        <li key={index}>{work.title}</li>
                    </>
                ))}
            </ul>
        </>
    )
}

export default TodoList;