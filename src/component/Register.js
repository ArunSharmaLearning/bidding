import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

function Register(props) {
    return (
        <div>
            <div className="login-form">
                <form>
                    <h1>Register</h1>
                    <div className="user-box">
                        <input type="text" />
                        <label>Name</label>
                    </div>
                    <div className="user-box">
                        <input type="email" />
                        <label>Email</label>
                    </div>
                    <div className="user-box">
                        <input type="password" />
                        <label>Password</label>
                    </div>
                    <div className='bottom-box'>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </a>
                    <Link to='/login' className='already-register'> Already Registered? </Link>
                    </div>
                </form>
            </div>
        </div>
    )

}
export default Register;