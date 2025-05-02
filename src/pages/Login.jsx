import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { LuEye, LuEyeClosed } from 'react-icons/lu';
import Swal from 'sweetalert2';
import StaticLang from '../utils/StaticLang';

const Login = () => {
    const myInfo = {
        email: "alkhasovagunel@gmail.com",
        password: "gunel2004"
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visibility, setVisibility] = useState(false);


    const submitForm = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            Swal.fire({
                icon: "warning",
                title: "Please, fill in the inputs!"
            })
        }
        else if (email === myInfo.email && password === myInfo.password) {
            Swal.fire({
                icon: "success",
                title: "Login is successfully"
            })
        }
        else if (email !== myInfo.email || password !== myInfo.password) {
            Swal.fire({
                icon: "error",
                title: "Email address or password is wrong!"
            })
        }
    }


    const passwordVisibility = (e) => {
        e.preventDefault();
        setVisibility(visibility => !visibility);
    }
    return (
        <>
            <div className=" d-flex justify-content-center align-items-center flex-column">
                <div className="first-shop">
                    <h1><StaticLang az="Daxil olun" en="Login"/></h1>
                </div>
                <div className="col-5">
                    <div className="form-div">
                        <h1><StaticLang az="Giriş səhifəsi" en="Login Page"/></h1>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label"><StaticLang az="E-poçt Ünvanı" en="Email Address"/></label>
                                <input type="email" className="form-control" onChange={(e) => {
                                    setEmail(e.target.value)
                                }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label"><StaticLang az="Şifrə" en="Password"/></label>
                                <div className="eye-part">
                                    <input type={`${visibility ? "text" : "password"}`} className="form-control" onChange={(e) => {
                                        setPassword(e.target.value)
                                    }} />
                                    <button className='eye-btn' onClick={passwordVisibility}>
                                        {visibility ? <LuEye size={25} /> : <LuEyeClosed size={25} />}
                                    </button>
                                </div>

                            </div>
                            <button type="submit" className="btn login-btn" onClick={submitForm}><StaticLang az="Daxil olun" en="Login"/></button>
                        </form>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Login