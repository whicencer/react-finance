import React from 'react';
import { MainApi } from '@services/mainApi';
import { toast } from 'react-toastify';
import AuthForm from '@components/AuthForm';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const signUp = (username: string, password: string) => {
    const api = new MainApi();

    api.signup({ username, password })
      .then(response => {
        if (!response.ok) {
          toast.error(response.message);
        } else {
          toast.success(response.message);
          navigate('/signin');
        }
      });
  };

  return (
    <>
      <AuthForm clickHandler={signUp} title='Sign up'>
        <span style={{ textAlign: 'right', width: '35%', marginTop: '15px' }}>
          <Link style={{ color: '#fff', textDecoration: 'underline', fontSize: 13 }} to={'/signin'}>Do you already have an account?</Link>
        </span>
      </AuthForm>
    </>  
  );
};

export default Signup;