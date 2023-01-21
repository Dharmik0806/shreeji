import React, { useState } from 'react';


function Formval(props) {
    const [fname, setfname] = useState("");
    const [email, setemail] = useState("");
    const [mono, setmono] = useState("");

    const [error1, seterror1] = useState();
    const [error2, seterror2] = useState();
    const [error3, seterror3] = useState();

    const validateForm = () => {
        console.log(fname);
        console.log(email);
        
        // if (fname === "") {
        //     seterror1("name is required")
        //     if ((email === "")) {
        //         seterror2("email is required")
        //         if ((mono === "")) {
        //             seterror3("mono is required")
        //         } else {
        //             seterror3("")
        //         }
        //     } else {
        //         if ((mono === "")) {
        //             seterror3("mono is required")
        //         }
        //     }
        // } else if ((email === "")) {
        //     seterror2("email is required")
        //     if ((mono === "")) {
        //         seterror3("mono is required")
        //     } else {
        //         seterror3("")
        //     }
        // } else if ((mono === "")) {
        //     seterror3("mono is required")
        // }

        if(fname === "") {
            seterror1("name is required")
            
        }else{
            seterror1("")
        }

        if(email === "") {
            seterror2("email is required")
        }else{
            seterror2("")
        }

        if(mono === "") {
            seterror3("mono is required")
        }else{
            seterror3("")
        }
    }

    return (
        <>
            <h1>hellow</h1>
            <h1>hellow</h1>
            <h1>hellow</h1>

            <form className='form-1'>
                <h2>Application Form</h2>
                <div className="row">
                    <p>Full Name</p>
                    <input
                        type="text"
                        name="name"
                        placeholder='Name'
                        onChange={(e) => setfname(e.target.value)}
                    />
                    <span className='errore'>{error1}</span>
                </div>

                <div className="row">
                    <p>Email Address</p>
                    <input
                        type="email"
                        name="email"
                        placeholder='E-mail'
                        onChange={(e) => setemail(e.target.value)}
                    />
                    <span className='errore'>{error2}</span>
                </div>

                <div className="row">
                    <p>Mobile Number</p>
                    <input
                        type="number"
                        name="mobile"
                        placeholder='Number'
                        maxLength={10}
                        onChange={(e) => setmono(e.target.value)}
                    />
                    <span className='errore'>{error3}</span>
                </div>


            </form>
            <div className="row btn1" >
                <input type="button" onClick={validateForm} defaultValue="Submit" />
            </div>
        </>
    );
}

export default Formval;