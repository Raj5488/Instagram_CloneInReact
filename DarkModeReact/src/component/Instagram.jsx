    // LoginSignup.js
    import React, { useState } from 'react';
    import './Instagram.css';
    function LoginSignup() {
    const [isSignup, setIsSignup] = useState(false);

    const toggleSignup = () => {
        setIsSignup(!isSignup);
    };

    return (
        <div className='Newcontainer'>
        <div className="container">
        <div className="form">
        <div className="logo">Instagram</div>
            <input
            type="text"
            placeholder="Phone number, username, or email"
            className="input-field"
            />
            <input
            type="password"
            placeholder="Password"
            className="input-field"
            />
            {isSignup && (
            <>
                <input
                type="text"
                placeholder="Mobile Number or Email"
                className="input-field"
                />
                <input
                type="text"
                placeholder="Full Name"
                className="input-field"
                />
            </>
            )}
            <button className="submit-button">
            {isSignup ? 'Sign up' : 'Sign in'}
            </button>
            <p>
            {isSignup ? "Have an account?" : "Don't have an account?"}
            <span onClick={toggleSignup} className="switch-link">
                {isSignup ? 'Log in' : 'Sign up'}
            </span>
            </p>
        </div>
    </div>
        </div>
    );
}

    export default LoginSignup;
