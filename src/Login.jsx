import { React, useState } from 'react'
import { TextField, Button, } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Login = () => {
    const initialvalues = { email: "", password: "" }
    const [formvalues, setformvalues] = useState(initialvalues)
    const [formErrors, setFormError] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError(validate(formvalues));
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformvalues({ ...formvalues, [name]: value });
        console.log(formvalues);
    };

    const validate = (values) => {
        const errors = {};

        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // const regex2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        // const regex2 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        const regx3 = /^[0-9\b]+$/


        if (!values.email) {
            errors.email = "email is required "
        } else if (!regex.test(values.email)) {
            errors.email = "not valid email format"
        }
        if (!values.password) {
            errors.password = "password is required"
        }
        // else
        //     if (!regex2.test(values.password)) {
        //         errors.password = 'enter a valid password'
        //     }

        return errors;
    }


    return (

        <div className="login">
            <div className='child'>
                <form className='form' onSubmit={handleSubmit}>
                    <h2>Login</h2>

                    <TextField
                        className="inputfield"
                        // id="filled-basic"
                        label="E-mail"
                        variant="outlined"
                        size="small"
                        placeholder="Enter Your Email"
                        type="email"
                        name="email"
                        value={formvalues.email}
                        onChange={handleChange}
                    />
                    <p>{formErrors.email}</p>

                    <TextField
                        className="inputfield"
                        // id="filled-basic"
                        label="Password"
                        variant="outlined"
                        size="small"
                        placeholder="enter Your password"
                        name="password"
                        type="password"
                        value={formvalues.password}
                        onChange={handleChange}
                    />
                    <p>{formErrors.password}</p>
                    <Button
                        className="inputfield"
                        variant="contained"
                        size="small"
                        color="primary"
                        type="submit"
                    >
                        Login
                    </Button>
                    Want to ?<Link to="/">
                Log Out</Link>
                </form>
            </div>
        </div>

    )
}

export default Login;
