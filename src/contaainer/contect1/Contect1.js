import React from 'react';
import * as yup from 'yup'
import { Form, Formik, useFormik } from 'formik';


function Contect1(props) {

    let schema = yup.object().shape({
        name: yup.string().required('please enter name'),
        email: yup.string().email('invalid email').required('please enter email'),
        month: yup.string().required("please enter mounth")
    });

    const formikobj = useFormik({
        initialValues: {
            name: '',
            email: '',
            month: '',
        },

        validationSchema: schema,
        onSubmit: values => {
            console.log(values);
        },
    });

    const { handleChange, handleBlur, handleSubmit, errors, touched } = formikobj
    console.log(errors, touched);
    return (
        <div className='container'>

            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <Formik values={formikobj}>
                <Form onSubmit={handleSubmit}>
                    <div>
                        Name:
                        <input
                            type='text'
                            name='name'
                            className='Form-control'
                            id='name'
                            placeholder='Full name'
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.name !== '' && touched.name ? <span>{errors.name}</span> : null}
                    </div>

                    <div>
                        Email:
                        <input
                            type='email'
                            name='email'
                            className='Form-control'
                            id='name'
                            placeholder='Enter Email'
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.email !== '' && touched.email ? <span>{errors.email}</span> : null}


                    </div>

                    <div>
                        Month:
                        <input
                            type='month'
                            name='month'
                            className='Form-control'
                            id='name'
                            placeholder='month'
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />

                        {errors.month !== '' && touched.month ? <span>{errors.month}</span> : null}

                    </div>

                    <button type="submit">
                        Submit
                    </button>

                </Form>
            </Formik>


        </div>
    );
}

export default Contect1;