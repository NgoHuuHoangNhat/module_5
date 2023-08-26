import { ErrorMessage, Field, Formik, Form } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {

    const err = {
        empty: 'is not empty!',
        notMatches: 'is not matches'
    }
    return (
        <>
            <h1>Contact form</h1>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                }}

                //Validate
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("Input name " + err.empty),

                    email: Yup.string()
                        .required("Input email " + err.empty)
                        .matches(/^[a-zA-Z0-9+-]+@[a-zA-Z0-9-.]+$/, 'Email not matches!'),

                    phone: Yup.string()
                        .required("Input phone " + err.empty)
                        .matches( /^0\d{9}$/ , 'Phone number not matches'),
         


                })}



                //Submit
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                    console.log(values);
                    alert('Add contact successfully');
                }}
            >

                <Form>
                    {/*input name */}
                    <div>
                        <label forHtml='name'>Name</label>
                        <Field name='name' id='name' type='text' ></Field>
                        <ErrorMessage name='name'></ErrorMessage>
                    </div>


                    {/* input email */}
                    <div>
                        <label forHtml='email'>Email</label>
                        <Field name='email' id='email' type='text' ></Field>
                        <ErrorMessage name='email'></ErrorMessage>
                    </div>


                    {/* input phone */}
                    <div>
                        <label forHtml='phone'>Phone</label>
                        <Field name='phone' id='phone' type='text' ></Field>
                        <ErrorMessage name='phone'></ErrorMessage>
                    </div>

                    <div>
                        {/* input message */}
                        <label forHtml='message'>Message</label>
                        <Field as='textarea' name='message' id='message' ></Field>
                        <ErrorMessage name='message'></ErrorMessage>
                    </div>
                    <button type='submit'>Submit</button>
                </Form>


            </Formik>
        </>
    )
}

export default ContactForm;