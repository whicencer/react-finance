import React, { useState } from 'react';
import Button from '@shared/ui/Button';
import Input from '@shared/ui/Input';
import styles from './styles.module.scss';
import { IProps } from './AuthForm.typings';

const AuthForm: React.FC<IProps> = ({ clickHandler, title, children }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const isDisabled = !username.length || password.length < 8;

  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <div className={styles.form}>
        <div className={styles.formElement}>
          <label>Username</label>
          <Input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            style={{ marginTop: 10 }}
            placeholder='Username' type='text'
          />
        </div>
        <div className={styles.formElement}>
          <label>Password</label>
          <Input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            style={{ marginTop: 10 }}
            placeholder='Password'
            type='password'
          />
        </div>
        <Button onClick={() => clickHandler(username, password)}>{title}</Button>
      </div>
      { children }
    </div>
  );
};

export default AuthForm;