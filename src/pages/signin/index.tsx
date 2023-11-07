import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './signin.module.scss';
import { AuthLayout } from '@layout/AuthLayout/AuthLayout';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { signInThunk } from '@store/slices/user/thunk/signInThunk';
import Input from '@shared/ui/Input';
import Button from '@shared/ui/Button';

const Signin = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading } = useTypedSelector(state => state.user);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    dispatch(signInThunk({username, password}));
  };

  const additionalText = (
    <span className={styles.additionalText}>
      <Link to='/signup'>Do you not have an account yet?</Link>
    </span>
  );

  return (
    <AuthLayout title='Sign in' additionalText={additionalText}>
      <div>
        <label>Username</label>
        <Input
          className={styles.input}
          value={username}
          placeholder='Username'
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div style={{ marginTop: 12 }}>
        <label>Password</label>
        <Input
          className={styles.input}
          value={password}
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          type='password'
        />
      </div>
      <Button className={styles.button} onClick={signIn} disabled={isLoading}>{ isLoading ? 'Loading...' : 'Sign in' }</Button>
    </AuthLayout>
  );
};

export default Signin;