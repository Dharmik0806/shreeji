import { Form, Formik, useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as yup from 'yup'


function FirstOne(props) {

    const [data11, setData11] = useState(null);
    // schema
    let schema = yup.object().shape({
        name: yup.string().required('please enter name'),
        email: yup.string().email('invalid email').required('please enter email'),
    });


    // function localStorage1
    const localStorage1 = (values) => {
        let localData = JSON.parse(localStorage.getItem("FirstOne"))

        if (localData !== null) {
            localData.push(values);
            localStorage.setItem("FirstOne", JSON.stringify(localData));
            setData11(localData)
        } else {
            localStorage.setItem("FirstOne", JSON.stringify([values]));
            setData11(localData);
        }
    }

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("FirstOne"))

        if (localData !== null) {
            setData11(localData)
        }
    }, [])

    // formik object
    const formikobj = useFormik({
        initialValues: {
            name: '',
            email: ''

        },

        validationSchema: schema,
        onSubmit: values => {
            // console.log(values);

            localStorage1(values);
        },
    });


    const { handleChange, handleBlur, handleSubmit, errors, touched, setFieldTouched } = formikobj;
    console.log(errors, touched);


    return (
        <div>
            <Formik values={formikobj}>
                <Form onSubmit={handleSubmit}>
                    <h1>ok</h1>
                    <h1>ok</h1>
                    <h1>ok</h1>
                    <h1>ok</h1>
                    <div>
                        <input
                            type="text"
                            placeholder="name"
                            id="name"
                            name="name"

                            onChange={(e) => { setFieldTouched("name"); handleChange(e) }}
                            onBlur={handleBlur}
                        />
                        {errors.name !== '' && touched.name ? <span className='form-error'>{errors.name}</span> : null}
                    </div>

                    <div>
                        <input
                            type="email"
                            placeholder="email"
                            id="email"
                            name="email"
                            onChange={(e) => { setFieldTouched("name"); handleChange(e) }}
                            onBlur={handleBlur}

                        />
                        {errors.email !== '' && touched.email ? <span className='form-error'>{errors.email}</span> : null}
                    </div>

                    <div className='form-btn'>

                        <input
                            type="submit"
                            value="Send Message"
                        />
                    </div>
                </Form>
            </Formik>


            <table border={"1px"}>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                   
                </tr>
                {
                    data11 !== null ?
                        data11.map((a, i) => {
                            return (
                                <tr>
                                    <td>{a.name}</td>
                                    <td>{a.email}</td>

                                </tr>
                            )
                        })
                        :
                        null
                }
            </table>

        </div>

    )
}

export default FirstOne;