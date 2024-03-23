import React from 'react'
import { Link } from 'react-router-dom'


const SignUp = () => {
  return (
    <div id='signup' className='signup template d-flex justify-content-center align-items-center 100-vh bg-primary'>
        <div id='login-container' className='form_container p-5 rounded bg-white'>
            <form>
            <h1 id='signin-logo' className='text-center'>Sign Up</h1>
            <div className='mb-2'>
                <label htmlFor="fname">First Name:</label>
                <input type="text" placeholder='Enter First Name' className='form-control pl-3'/>
            </div>
            <div className='mb-2'>
                <label htmlFor="lname">Last Name:</label>
                <input type="text" placeholder='Enter Last Name' className='form-control pl-3'/>
            </div>
            <div className='mb-2'>
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder='Enter Password' className='form-control pl-3' />
            </div>
           
            <div className='d-grid mt-2'>
                <button id='signin-btn' className='btn btn-primary'>Sign Up</button>
            </div>
            <p className='test-end mt-2 '>Already Registered <Link id='login-link' to="/Login">Sign In </Link></p>
            </form>
        </div>
    </div>
  )
}

export default SignUp