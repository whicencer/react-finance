import React from 'react';
import AuthForm from '@components/AuthForm';
import { MainApi } from '@services/mainApi';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setUser } from '@store/slices/user';
import { Link } from 'react-router-dom';

const Signin = () => {
  const dispatch = useDispatch();

  const signIn = (username: string, password: string) => {
    const api = new MainApi();

    api.signin({ username, password })
      .then(response => {
        if (!response.ok) {
          toast.error(response.message);
        } else {
          localStorage.setItem('user', JSON.stringify({ token: response.token, username }));
          dispatch(setUser({ username, token: response.token }));        
          toast.success(response.message);
        }
      });
  };

  return (
    <AuthForm clickHandler={signIn} title='Sign in'>
      <span style={{ textAlign: 'right', marginTop: 15, width: '35%', fontSize: 13 }}>
        <Link to='/signup'>Do you not have an account yet?</Link>
      </span>
    </AuthForm>
  );
};

export default Signin;