import React from 'react';
import * as yup from 'yup'
import { Form, Formik, useFormik } from 'formik';


function Contect1(props) {

    let schema = yup.object().shape({
        name: yup.string().required('please enter name'),
        email: yup.string().email('invalid email').required('please enter email'),
        mono: yup.string().required("please enter mobail number"),
        message: yup.string().required("please enter message")
    });

    const formikobj = useFormik({
        initialValues: {
            name: '',
            email: '',
            mono: '',
            message: ''
        },

        validationSchema: schema,
        onSubmit: values => {
            console.log(values);
        },
    });

    const { handleChange, handleBlur, handleSubmit, errors, touched } = formikobj
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

                                        onChange={handleChange}
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

                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.email !== '' && touched.email ? <p  className='form-error'>{errors.email}</p> : null}
                            </div>

                            <div className='form-input'>
                                <label for="mono">Mo No : </label><br />

                                <input
                                    type="tel"
                                    name="mono"
                                    id='mono'
                                    class="form-control"
                                    placeholder='Mobail Number'

                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.mono !== '' && touched.mono ? <p  className='form-error'>{errors.mono}</p> : null}
                            </div>

                            <div className='form-input'>
                                <label for="message">Message : </label><br />

                                <input
                                    type="textarea"
                                    name="message"
                                    id='message'
                                    class="form-control"
                                    placeholder='Enter Message'

                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
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



        // ________________________________________________________old contect form________________________________________________________



        // <div className='container'>

        //     <h1>hello</h1>
        //     <h1>hello</h1>
        //     <h1>hello</h1>
        //     <Formik values={formikobj}>
        //         <Form onSubmit={handleSubmit}>
        //             <div>
        //                 Name:
        //                 <input
        //                     type='text'
        //                     name='name'
        //                     className='Form-control'
        //                     id='name'
        //                     placeholder='Full name'
        //                     onChange={handleChange}
        //                     onBlur={handleBlur}
        //                 />
        //                 {errors.name !== '' && touched.name ? <span>{errors.name}</span> : null}
        //             </div>

        //             <div>
        //                 Email:
        //                 <input
        //                     type='email'
        //                     name='email'
        //                     className='Form-control'
        //                     id='name'
        //                     placeholder='Enter Email'
        //                     onChange={handleChange}
        //                     onBlur={handleBlur}
        //                 />
        //                 {errors.email !== '' && touched.email ? <span>{errors.email}</span> : null}


        //             </div>

        //             <div>
        //                 Month:
        //                 <input
        //                     type='month'
        //                     name='month'
        //                     className='Form-control'
        //                     id='name'
        //                     placeholder='month'
        //                     onChange={handleChange}
        //                     onBlur={handleBlur}
        //                 />

        //                 {errors.month !== '' && touched.month ? <span>{errors.month}</span> : null}

        //             </div>

        //             <button type="submit">
        //                 Submit
        //             </button>

        //         </Form>
        //     </Formik>


        // </div>


    );
}

export default Contect1;