import { Link, useNavigate } from 'react-router-dom';
import Input from '@shared/ui/Input';
import Button from '@shared/ui/Button';
import { AuthLayout } from '@layout/AuthLayout/AuthLayout';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpThunk } from '@store/slices/user/thunk/signUpThunk';
import { AppDispatch } from '@store/index';
import { useTypedSelector } from '@hooks/useTypedSelector';

const additionalText = (
  <span style={{ textAlign: 'right', width: '35%', marginTop: '15px' }}>
    <Link style={{ color: '#fff', textDecoration: 'underline', fontSize: 13 }} to='/signin'>Do you already have an account?</Link>
  </span>
);

const Signup = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();
  const { isLoading } = useTypedSelector(state => state.user);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signUpHandler = async () => {
    dispatch(signUpThunk({ username, password, navigate }));
  };

  return (
    <>
      <AuthLayout title='Sign up' additionalText={additionalText}>
        <div>
          <label>Username</label>
          <Input
            value={username}
            placeholder='Username'
            onChange={(e) => setUsername(e.target.value)}
            style={{ marginTop: 7 }}
          />
        </div>
        <div style={{ marginTop: 12 }}>
          <label>Password</label>
          <Input
            value={password}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginTop: 7 }}
            type='password'
          />
        </div>
        <Button style={{ marginTop: 15 }} onClick={signUpHandler} disabled={isLoading}>{ isLoading ? 'Loading...' : 'Sign up' }</Button>
      </AuthLayout>
    </>  
  );
};

export default Signup;