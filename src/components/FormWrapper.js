import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form'




const RegisterForm = props => {
    const [ formState, setFormState ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        submitted: false,
    })
    const onChangeHandler = event => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }

    let firstNameValidation;
    let lastNameValidation;
    let emailValidation;
    let passwordValidation;
    let passwordMatchValidation;

    if(formState.submmited && formState.firstName.length < 2){
        firstNameValidation=<p>First name must be at least 2 characters.</p>;
    }
    if(formState.submmited && formState.lastName.length < 2){
        lastNameValidation=<p>Last name must be at least 2 characters.</p>;
    }
    if(formState.submmited && formState.email.length < 5){
        emailValidation=<p>Email must be at least 5 characters.</p>;
    }
    if(formState.submmited && formState.password.length < 8){
        passwordValidation=<p>Password must be at least 8 characters.</p>;
    }
    if(formState.submmited && formState.password != formState.confirmPassword){
        passwordMatchValidation=<p>Passwords must match.</p>;
    }

    const onSubmitHandler = event => {
        event.preventDefault();
        setFormState({
            ...formState,
            submmited: true
        })
        console.log(formState);
    }
    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <h1 className="display-4">Register</h1>
                    <label>First Name</label>
                    <input size="sm" className="mb-3" type="text" name="firstName" onChange={onChangeHandler}/>
                    <br/>        
                    <label>Last Name</label>
                    <input size="sm" className="mb-3" type="text" name="lastName" onChange={onChangeHandler}/>
                    <br/>        
                    <label>Email</label>
                    <input size="sm" className="mb-3" type="email" name="email" onChange={onChangeHandler}/>
                    <br/>        
                    <label>Password</label>
                    <input size="sm" className="mb-3" type="password" name="password" onChange={onChangeHandler}/>
                    <br/>        
                    <label>Confirm Password</label>
                    <input size="sm" className="mb-3" type="password" name="confirmPassword" onChange={onChangeHandler}/>
                    <br/>   
                    <button variant="primary" type="submit">Submit</button>   
                </div>  
            </form>

            <div className="yourData">
                <p>Your Form Data</p>
                <p>First Name: {formState.firstName}</p>
                <p>{firstNameValidation}</p>
                <p>Last Name: {formState.lastName}</p>
                <p>{lastNameValidation}</p>
                <p>Email: {formState.email}</p>
                <p>{emailValidation}</p>
                <p>Password: {formState.password}</p>
                <p>{passwordValidation}</p>
                <p>{passwordMatchValidation}</p>
                <p>Confirm Password: {formState.confirmPassword}</p>
            </div>
        </div>
    );
}


export default RegisterForm;