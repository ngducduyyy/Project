import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
        <div className='login'>
        <div id='login-container' className='form_container p-5 rounded bg-white'>
            <form>
            <h1 id='signin-logo' className='text-center mb-4'>Sign In</h1>
            <div className='mb-3'>
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder='Enter Email' className='form-control pl-3'/>
            </div>
            <div className='mb-3'>
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder='Enter Password' className='form-control pl-3' />
            </div>
            <div className='mb-3'>
                <input type="checkbox" className='custom-control custom-checkbox' id='check' />
                <label htmlFor="check" className='custom-input-label ms-2'>
                    Remember me
                </label>
            </div>
            <div  className='d-grid'>
                <button id='signin-btn' className='btn btn-primary'>Sign in</button>
            </div>
            <p className='test-end mt-2 '>
                Don't have a Acount? <Link id='login-link'  className='signup' to="/SignUp">Sign up</Link>
            </p>
            </form>
        </div>
    </div>

  )
}

export default Login