import React from 'react';
import * as yup from 'yup'
import { ErrorMessage, Form, Formik, useFormik } from 'formik';


function First(props) {

    // const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    let schema = yup.object().shape({
        // name: yup.string().required('please enter name'),

        name: yup.string()
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
            .required('Username is required')
            .min(6, 'Username must be at least 6 characters')
            .max(20, 'Username must not exceed 20 characters'),
            

        email: yup.string().email('invalid email').required('please enter email'),

        password: yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(15, 'Password must not exceed 15 characters'),


        confirmPassword: yup.string()
            .required('Confirm Password is required')
            .oneOf([yup.ref('password'), null], 'Confirm Password does not match'),

        acceptTerms: yup.bool().oneOf([true], 'Accept Terms is required'),

        mono: yup.string().required("please enter mobail number").test('mono', 'invalid numbers', (val) => val.toString().length == 10),

        message: yup.string().required("please enter message")
    });

    const formikobj = useFormik({
        initialValues: {
            name: '',
            email: '',
            mono: '',
            message: '',
            password: '',
            confirmPassword: '',
            acceptTerms: false,
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
                    <h2>Send us a message</h2>

                    <Formik values={formikobj}>
                        <Form onSubmit={handleSubmit}>

                            <div className='form-input'>
                                <label for="name">Name : </label><br />

                                <input
                                    type="text"
                                    name="name"
                                    id='name'
                                    class="form-control"
                                    placeholder='First Name'

                                    onChange={e => { setFieldTouched('name'); handleChange(e) }}
                                    onBlur={handleBlur}
                                />

                                {errors.name !== '' && touched.name ? <p className='form-error'>{errors.name}</p> : null}
                            </div>

                            <div className='form-input'>
                                <label for="name">Email : </label><br />

                                <input
                                    type="text"
                                    name="email"
                                    id='email'
                                    class="form-control"
                                    placeholder='Email-ID'

                                    onChange={e => { setFieldTouched('email'); handleChange(e) }}
                                    onBlur={handleBlur}
                                />
                                {errors.email !== '' && touched.email ? <p className='form-error'>{errors.email}</p> : null}
                            </div>

                            {/* Password */}
                            <div className="form-input">
                                <label for="password">password : </label><br />
                                <input
                                    name="password"
                                    type="password"
                                    id='password'
                                    class="form-control"
                                    placeholder='Enter Password'

                                    onChange={e => { setFieldTouched('password'); handleChange(e) }}
                                    onBlur={handleBlur}
                                />
                                {errors.password !== '' && touched.password ? <p className='form-error'>{errors.password}</p> : null}

                            </div>
                            {/*  */}

                            {/* Conform Password */}
                            <div className="form-input">
                                <label for="confirmPassword"> Confirm Password </label>
                                <input
                                    name="confirmPassword"
                                    type="confirmPassword"
                                    id='confirmPassword'
                                    placeholder='Re-enter Password'

                                    className={
                                        'form-control' +
                                        (errors.confirmPassword && touched.confirmPassword
                                            ? ' is-invalid'
                                            : '')
                                    }
                                    onChange={e => { setFieldTouched('confirmPassword'); handleChange(e) }}
                                    onBlur={handleBlur}
                                />
                                {/* <ErrorMessage
                                    name="confirmPassword"
                                    component="div"
                                    className="invalid-feedback"
                                /> */}

                                {errors.confirmPassword !== '' && touched.confirmPassword ? <p className='form-error'>{errors.confirmPassword}</p> : null}

                            </div>
                            {/*  */}

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

                            {/* accept term */}
                            <div className='form-input'>
                                <input
                                    name="acceptTerms"
                                    id='acceptTerms'
                                    type="checkbox"
                                    className={
                                        'form-check-input' +
                                        (errors.acceptTerms && touched.acceptTerms
                                            ? ' is-invalid'
                                            : '')
                                    }
                                    onChange={e => { setFieldTouched('acceptTerms'); handleChange(e) }}
                                    onBlur={handleBlur}
                                />
                                <label for="acceptTerms" className="form-check-label">
                                    I have read and agree to the Terms
                                </label>
                                {/* <ErrorMessage
                                    name="acceptTerms"
                                    component="div"
                                    className="invalid-feedback"
                                /> */}
                                {errors.acceptTerms !== '' && touched.acceptTerms ? <p className='form-error'>{errors.acceptTerms}</p> : null}

                            </div>

                            {/* submit buttone */}
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

export default First;
















// import React from 'react';
// import * as yup from 'yup';
// import { Form, Formik, useFormik } from 'formik';


// function First(props) {

//     let schema = yup.object().shape({
//         mono: yup.number()
//             .required('A phone number is required')
//             .test('mono', 'invalid numbers', (val) => val.toString().length == 10)

//         // name: yup.string().required(),
//         // age: yup.number().required().positive().integer(),
//         // email: yup.string().email(),
//         // website: yup.string().url(),

//     });

//     const formikobj = useFormik({
//         initialValues: {
//             // name: '',
//             // email: '',
//             // mono: '',
//             // password: '',
//             // message: ''

//             mono: ''

//         },

//         validationSchema: schema,
//         onSubmit: values => {
//             console.log(values);
//         },
//     });

//     const { handleChange, handleBlur, handleSubmit, errors, touched, setFieldTouched } = formikobj
//     console.log(errors, touched);


//     return (
//         <>
//             <h1>hellow</h1>
//             <h1>hellow</h1>
//             <h1>hellow</h1>
//             <h1>hellow</h1>
//             <h1>hellow</h1>

//             <div className="form-container">
//                 <div className="contectForm">
//                     <h2>Form 2</h2>
//                     <Formik values={formikobj}>
//                         <Form onSubmit={handleSubmit}>
//                             <div className='form-input'>
//                                 <label for="mono">Mo No : </label><br />

//                                 <input
//                                     type="tel"
//                                     name="mono"
//                                     id='mono'
//                                     class="form-control"
//                                     placeholder='Mobail Number'

//                                     onChange={e => { setFieldTouched('mono'); handleChange(e) }}
//                                     onBlur={handleBlur}
//                                 />
//                                 {errors.mono !== '' && touched.mono ? <p className='form-error'>{errors.mono}</p> : null}
//                             </div>

//                             {/* ******  Submit  ****** */}
//                             <div className='form-btn'>

//                                 <input
//                                     type="submit"
//                                     value="Send Message"
//                                 />
//                             </div>
//                         </Form>
//                     </Formik>
//                 </div>
//             </div>

//         </>
//     );
// }

// export default First;


