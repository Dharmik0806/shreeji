import React, { useState } from 'react';
import { Form, FormGroup, Label, Input ,h1 } from 'reactstrap'
function Signup(props) {

    const [type, setType] = useState('signup');
    const [reset, setReset] = useState(false)
    return (
        <div className='signup_container container'>
            <Form>
                
                {
                    reset === true ?
                        <h1>Reset Password</h1> :
                        type === 'signup' ?
                            <h1>Sign up</h1>
                            :
                            <h1>Log in </h1>
                }
                {
                    reset === true ? null :
                        type === 'signup' ?
                            <FormGroup>
                                <Label for="Fname">
                                    User Name
                                </Label>
                                <Input
                                    id="Fname"
                                    name="email"
                                    placeholder="Enter Full Name"
                                    type="email"
                                />
                            </FormGroup>
                            :
                            null
                }

                {
                    reset === true ? null :
                        type === 'signup' ?
                            <FormGroup>
                                <Label for="Mono">
                                    User Name
                                </Label>
                                <Input
                                    id="Mono"
                                    name="email"
                                    placeholder="Mo no"
                                    type="mono"
                                />
                            </FormGroup> :
                            null
                }

                <FormGroup>
                    <Label for="useremail">
                        Email
                    </Label>
                    <Input
                        id="useremail"
                        name="email"
                        placeholder="Enter Email"
                        type="email"
                    />
                </FormGroup>

                {
                    reset === true ? null :
                        <FormGroup>
                            <Label for="userPassword">
                                Password
                            </Label>
                            <Input
                                id="userPassword"
                                name="password"
                                placeholder="password"
                                type="password"
                            />
                        </FormGroup>

                }

                {
                    reset === true ? null :
                        type === 'signup' ?
                            <FormGroup>
                                <Label for="exampleText">
                                    Date
                                </Label>
                                <Input
                                    id="exampleText"
                                    name="text"
                                    placeholder="D.O.B"
                                    type="date"
                                />
                            </FormGroup>
                            :
                            null
                }

                {
                    reset === true ? null :
                        type === 'signup' ?
                            <FormGroup>
                                <Label for="exampleText">
                                    Text Area
                                </Label>
                                <Input
                                    id="exampleText"
                                    name="text"
                                    placeholder="Address"
                                    type="textarea"
                                />
                            </FormGroup>
                            :
                            null
                }

                <FormGroup check>
                    <Input
                        id="exampleCheck"
                        name="check"
                        type="checkbox"
                    />
                    <Label check for="exampleCheck">
                        Check me out
                    </Label>
                </FormGroup>

            </Form>


            {/* <div> */}
            {/* <NavLink exact   to="/signin">Already Have An Account ?</NavLink> */}
            {/* <a onClick={() => { setType('login') }} >Already Have An Account ?</a> */}
            {/* <p> <a onClick={() => { setReset(true) }} >Forgot password ?</a></p> */}
            {/* </div> */}

            {
                reset ?
                        // <a onClick={() => { setType('login'); setReset(false) }} >Already Have An Account? Login</a>
                        <span  onClick={() => { setType('login'); setReset(false) }}>Already Have An Account? <a>Login</a></span>
                    :
                    type === 'signup' ?
                        // <p> <a onClick={() => { setType('signup') }} >login ?</a></p>
                        // <a onClick={() => { setType('login'); setReset(false) }} >Already Have An Account? Login</a>
                        <span onClick={() => { setType('login'); setReset(false) }} >Already Have An Account? <a>Login</a></span>
                        :
                        <>
                            {/* <a onClick={() => { setType('signup'); setReset(false) }} >Create an account? Signup</a> <br />
                            <a onClick={() => { setReset(true) }} >Forgot password?</a> */}

                            <span onClick={() => { setType('signup'); setReset(false) }} >Create an account?<a>Signup</a></span>
                            <span onClick={() => { setReset(true) }} ><a>Forgot password?</a></span>
                        </>

            }


        </div>
    );
}

export default Signup;