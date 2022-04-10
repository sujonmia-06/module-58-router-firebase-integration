import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h3>Please login</h3>
            <div style={{ margin: '20px' }}>
                <button onClick={signInWithGoogle}>Google Sign In</button>
            </div>
            <form>
                <input type="email" placeholder="Your Email" />
                <br />
                <input type="password" placeholder="Your Password" />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;