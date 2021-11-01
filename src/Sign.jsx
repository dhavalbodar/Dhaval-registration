import { React, useState } from 'react'
import { TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core'

import "./App.css"
import Circle from '@mui/icons-material/Circle';
import { Link } from 'react-router-dom';


const Signup = () => {

    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setpassword] = useState("")
    // const [confirmpassword, setConfirmpasswoed] = useState("")
    // const [phoneno, setPhoneno] = useState("")
    // const [tnc, setTnc] = useState(false)
    // const [file, setfile] = useState("")
    const initialvalues = { fullname: "", email: "", phoneno: "", password: "", confirmpassword: "", Tnc: "fasle" }
    const [formvalues, setformvalues] = useState(initialvalues)
    const [formErrors, setFormError] = useState({})
    // const [isSubmit , setIsSubmit ] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformvalues({ ...formvalues, [name]: value });
        console.log(formvalues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError(validate(formvalues));
    }
    const validate = (values) => {
        const errors = {};

        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // const regex2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        // const regex2 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        const regx3 = /^[0-9\b]+$/

        if (!values.fullname) {
            errors.fullname = "Fullname is required "
        }
        if (!values.email) {
            errors.email = "email is required "
        } else if (!regex.test(values.email)) {
            errors.email = "not valid email format"
        }
        if (!values.phoneno) {
            errors.phoneno = "pls enter phone no"
        }
        else if (!regx3.test(values.phoneno)) {
            errors.phoneno = "Enter a valid number "
        } else if (values.phoneno.length !== 10) {
            errors.phoneno = "Enter a valid phone number"
        }
        if (!values.password) {
            errors.password = "password is required"
        }
        // else
        //     if (!regex2.test(values.password)) {
        //         errors.password = 'enter a valid password'
        //     }

        if (!values.confirmpassword) {
            errors.confirmpassword = "confirm passwords"
        } else if (values.password != values.confirmpassword) {
            errors.confirmpassword = "password are not same"
        }

        if (values.Tnc === false) {
            errors.Tnc = "pls accepts tnc"
        }
        return errors;
    }

    return (
        <div className="main">
            <div className='child'>
                <form className='form' onSubmit={handleSubmit}>
                    <h2 >Sign Up</h2>
                    <TextField
                        className="inputfield"
                        // id="filled-basic"
                        label="FullName"
                        variant="outlined"
                        size="small"
                        placeholder="Enter Your name"
                        name="fullname"
                        value={formvalues.fullname}
                        onChange={handleChange}
                    />
                    <p>{formErrors.fullname}</p>

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
                        label="Phone-No"
                        variant="outlined"
                        size="small"
                        placeholder="Enter your number"
                        name="phoneno"
                        value={formvalues.phoneno}
                        onChange={handleChange}
                    />
                    <p>{formErrors.phoneno}</p>



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


                    <TextField
                        className="inputfield"
                        // id="filled-basic"
                        label="Confirm-Password"
                        variant="outlined"
                        size="small"
                        placeholder="Confirm password"
                        name="confirmpassword"
                        type="password"
                        value={formvalues.confirmpassword}
                        onChange={handleChange}
                    />
                    <p>{formErrors.confirmpassword}</p>


                    <Button
                        className="inputfield"
                        variant="contained"
                        component="label"
                        size="small"
                    >
                        Upload File
                        <input
                            // value={values.file}
                            onChange={handleChange}
                            type="file"
                            hidden
                        // name="file"
                        // value={values.file}
                        // onChange={haldleChange}
                        />
                    </Button>

                    <FormControlLabel
                        control={
                            <Checkbox size='small' name="Tnc"
                                value={formvalues.Tnc}
                                onChange={handleChange}
                                checked
                            />
                        }
                        label="I agree to Terms and Conditions"
                    />
                    <p>{formErrors.Tnc}</p>

                    <Button
                        className="inputfield"
                        variant="contained"
                        size="small"
                        color="primary"
                        type="submit"
                    >
                        Create New Account
                    </Button>
                    Have account? <Link to="/login">
                Log in</Link>
                </form>
            </div>
        </div >
    )
}

export default Signup;