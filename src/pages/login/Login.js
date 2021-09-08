import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import { GoogleAuthProvider } from "firebase/auth";
import { Col, Container } from 'react-bootstrap';
import SignInForm from '../../components/SignInForm';
import SignUpForm from '../../components/SignUpForm';
import './Login.css'
import { useHistory, useLocation } from 'react-router-dom';
import { loginWithProvider } from './logInManager';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Login = () => {
    const { setUser } = useContext(UserContext)
    const [isNewUser, setIsNewUser] = useState(false);
    const google = new GoogleAuthProvider();

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const redirect = () => {
        history.replace(from);
    }

    const handleGoogleLogin = () => {
        const loading = toast.loading('Please wait...');
        loginWithProvider(google)
        .then(res => {
            if(res.error){
                toast.error(res.error)
            } else {
                setUser(res);
                toast.success('Login successful!');
                redirect();
            }
            toast.dismiss(loading);
        })
    }

    return (
        <Container>
            <Col md={5} className="mx-auto fromContainer">
                {
                    isNewUser ?
                    <>
                        <p className="formTitle">Sign Up</p>
                        <SignUpForm redirect={redirect} setUser={setUser}/>
                        <p className="userIdentity">Already have an account? <button onClick={() => setIsNewUser(false)}>Sign In</button></p>
                    </>:
                    <>
                        <p className="formTitle">Sign In</p>
                        <SignInForm redirect={redirect} setUser={setUser}/>
                        <p className="userIdentity">Create a new account? <button onClick={() => setIsNewUser(true)}>Sign Up</button></p>
                    </>
                }
                <p className="or">Or</p>
                <button onClick={handleGoogleLogin} className="googleBtn"> Sign In with google</button>
            </Col>
        </Container>
    );
};

export default Login;