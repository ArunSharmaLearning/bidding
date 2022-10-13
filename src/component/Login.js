import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

function Login(props) {
    return (
        <div>
            <div className="login-form">
                <form>
                    <h1>Login</h1>
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
                    
                    <Link to='/register' className='already-register'> New User? </Link>
                    </div>
                </form>
            </div>
        </div>
    )

}
export default Login;