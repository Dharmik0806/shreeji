
import React from 'react';
import * as yup from 'yup'
import { Form, Formik, useFormik } from 'formik';


function Form2(props) {


    let schema = yup.object().shape({

        mono: yup.number()
            .required('A phone number is required')
            .test('mono', 'invalid numbers', (val) => val.toString().length == 10),

        gender: yup.string().required("A radio option is required"),

        password: yup.string()
            .min(5, 'Password Must be four characters long!')
            .max(20, 'Too Long!')
            .required('Password is Required'),

        message: yup.string().required("please enter message").max(10)
    });

    const formikobj = useFormik({
        initialValues: {
            name: '',
            email: '',
            mono: '',
            password: '',
            message: ''
        },

        validationSchema: schema,
        onSubmit: values => {
            console.log(values);
        },
    });

    const { handleChange, handleBlur, handleSubmit, errors, touched, setFieldTouched } = formikobj
    console.log(errors, touched);

    return (
        <>
            <div className="form-container">
                <div className="contectForm">
                    <h2>Form 2</h2>

                    <Formik values={formikobj}>
                        <Form onSubmit={handleSubmit}>

                            <div className='form-input'>
                                <label for="mono">Mo No : </label><br />

                                <input
                                    type="tel"
                                    name="mono"
                                    id='mono'
                                    class="form-control"
                                    placeholder='Mobail Number'

                                    onChange={e => { setFieldTouched('mono'); handleChange(e) }}
                                    onBlur={handleBlur}
                                />
                                {errors.mono !== '' && touched.mono ? <p className='form-error'>{errors.mono}</p> : null}
                            </div>

                            {/* ********************** Password */}

                            <div className='form-input'>
                                <label for="mono">Password : </label><br />

                                <input
                                    type="password"
                                    name="password"
                                    id='password'
                                    class="form-control"
                                    placeholder='password'

                                    onChange={e => { setFieldTouched('password'); handleChange(e) }}
                                    onBlur={handleBlur}
                                />
                                {errors.password !== '' && touched.password ? <p className='form-error'>{errors.password}</p> : null}
                            </div>

                            {/* ******************************* redio */}

                            <div className='form-input'>
                                <label for="mono">xender : </label><br />

                                <input type="radio" value="Male" name="gender" /> Male <br />
                                <input type="radio" value="Female" name="gender" /> Female <br />
                                <input type="radio" value="Other" name="gender" /> Other <br />


                                {errors.gender !== '' && touched.gender ? <p className='form-error'>{errors.gender}</p> : null}

                            </div>


                            <div className='form-input'>
                                <label for="message">Message : </label><br />

                                <textarea
                                    type="textarea"
                                    name="message"
                                    rows="2" cols="50"
                                    id='message'
                                    class="form-control"
                                    placeholder='Enter Message'
                                    onChange={e => { setFieldTouched('message'); handleChange(e) }}
                                    onBlur={handleBlur}
                                >

                                </textarea>
                                {errors.message !== '' && touched.message ? <p className='form-error'>{errors.message}</p> : null}
                            </div><br />


                            <div className='form-btn'>

                                <input
                                    type="submit"
                                    value="Send Message"
                                />
                            </div>
                        </Form>
                    </Formik>
                </div>



                <div className="contectInfo">
                    <div className='title'>
                        <h3>Contect us</h3>
                        <p>We are open for any suggestion or  just to have a chat</p>
                    </div>

                    <div className='contectType'>
                        <div className='item address'>
                            <div className='circleBox'>
                                <i class="fa fa-location-dot"></i>
                            </div>
                            <p><b>Address : </b>96, vandana society, syamdham chowk, nana varachha, surat-000000</p>

                        </div>

                        <div className='item phone'>
                            <div className='circleBox'>
                                <i class="fa-sharp fa-solid fa-phone"></i>
                            </div>
                            <p><b>Phone : </b>+91 99097 02505</p>

                        </div>

                        <div className='item email'>
                            <div className='circleBox'>
                                <i class="fa fa-envelope"></i>
                            </div>
                            <p><b>Email : </b>abc@gmail.com</p>

                        </div>

                        <div className='item website'>
                            <div className='circleBox'>
                                <i class="fa-brands fa-chrome"></i>
                            </div>
                            <p><b>Website : </b>wwww.shreeji.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Form2;