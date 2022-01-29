import React, { useState } from 'react';
import "./Signup.css"
import Validation from './Validation';
import { useEffect } from 'react';

function Signup(props) {

    //manage form filed's values
    const [formValues, setFormValues] = useState({username : "", pwd:"", email:""});

    const [formErrors, setFormerrors] = useState({})

    //flag for successful submit
    const [isSubmit, setIsSubmit] = useState(false)

    //handle change in form fields
    const handleChange = (event) =>{
        console.log(event.target);
        //destructure values of name and value from the input field...input field is in event.target
        const {name, value} = event.target;
        //...spread syntax = append new values i,.e, if username given after mail, both values shud b present here
        //[name] : value => name in [] tell it to store value in the key - name
        setFormValues({...formValues, [name] : value});
        console.log(formValues);
    }

    //Manage form submit
    const handleSubmit = (event) =>{
         //prevent refresh of form b4 submit
        event.preventDefault();
        //store errors returned from validation.js to update formerrors
        setFormerrors(Validation(formValues));
        //set upon submitting, submit as true
        setIsSubmit(true)
    }

    // Successful signup
    // successful validn alert when zero errors and isSubmit is tru
    // always keep on checking whenever error value changes
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            alert("Signup Successful");
        }
    }, [formErrors]);
  

    return (
        <div>
            {/* the below line is for  printing "Signup Successful" when zero errors and is submit is true */}
            {/* instead of Signup Successful, we can call another component here & redirect to new page */}
             {/* {Object.keys(formErrors).length === 0 && isSubmit ? (<div className='signupchk'>Signup Successful</div>) : (<pre className='pretext'>{JSON.stringify(formValues, undefined, 2)}</pre>)} */}
            {/* see the content in form instead of console.log */}
            <pre className='pretext'>{JSON.stringify(formValues, undefined, 2)}</pre>
            {/* form for signup */}
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="title">Welcome</div>
                    <div className="subtitle">Let's create your account!</div>
                    <div className="input-container ic1">
                        {/* value ={} will save the value form form into the state variable */}
                        <input id="Username" className="input" type="text" placeholder=" " name='username' required="" value={formValues.username} onChange={handleChange}/>
                        {/* use the same username cz that is used in errors in validation.js */}
                        <p className='error'>{formErrors.username}</p>
                        <div className="cut"></div>
                        <label  className="placeholder">Username</label>
                    </div>
                    <div className="input-container ic2">
                        <input id="password" className="input" type="text" placeholder=" " name='pwd' required="" value={formValues.pwd} onChange={handleChange}/>
                        <p className='error'>{formErrors.password}</p>
                        <div className="cut"></div>
                        <label  className="placeholder">Password</label>
                    </div>
                    <div className="input-container ic2">
                        <input id="email" className="input" type="text" placeholder=" " name='email' required="" value={formValues.email} onChange={handleChange} />
                        <p className='error'>{formErrors.email}</p>
                        <div className="cut cut-short"></div>
                        <label  className="placeholder">Email</label>
                    </div>
                    <button type="text" className="submit" onSubmit={handleSubmit}>submit</button>
                </form>
            </div>
        </div>
    )
}

export default Signup;