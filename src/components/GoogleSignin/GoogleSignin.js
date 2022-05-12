import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../images/social-icon/google.png'

const GoogleSignin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {

        errorElement =
            <p className='text-danger'>Error: {error?.message}</p>

    }

    if (user) {
        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-white w-50'></div>
                <p className='mt-2 px-2 fs-4 text-white'>or</p>
                <div style={{ height: '1px' }} className='bg-white w-50'></div>
            </div>
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info d-block mx-auto w-50 my-3'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default GoogleSignin;