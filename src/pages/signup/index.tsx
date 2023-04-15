import React, { useState } from 'react';
import styles from './styles.module.scss';
import Input from '@shared/ui/Input';
import Button from '@shared/ui/Button';
import { MainApi } from '@services/mainApi';
import { toast } from 'react-toastify';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isDisabled = !username.length || password.length < 8;

  const signUp = () => {
    const api = new MainApi();

    api.signup({ username, password })
      .then(response => {
        if (!response.ok) {
          toast.error(response.message);
        } else {
          toast.success(response.message);
        }
      });
  };

  return (
    <div className={styles.container}>
      <h2>Sign up</h2>
      <div className={styles.form}>
        <div className={styles.formElement}>
          <label>Username</label>
          <Input onChange={(e) => setUsername(e.target.value)} style={{ marginTop: 10 }} placeholder='Username' type='text' />
        </div>
        <div className={styles.formElement}>
          <label>Password</label>
          <Input onChange={(e) => setPassword(e.target.value)} style={{ marginTop: 10 }} placeholder='Password' type='password' />
        </div>
        <Button disabled={isDisabled} onClick={signUp}>Sign up</Button>
      </div>
    </div>
  );
};

export default Signup;