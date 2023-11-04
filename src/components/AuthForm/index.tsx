import React, { useState } from 'react';
import Button from '@shared/ui/Button';
import Input from '@shared/ui/Input';
import styles from './styles.module.scss';
import { IProps } from './AuthForm.typings';
import { toast } from 'react-toastify';

const AuthForm: React.FC<IProps> = ({ clickHandler, title, children }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isActive, setIsActive] = useState(true);

  const buttonClickHandler = async () => {
    setIsActive(false);
    clickHandler(username, password)
      .then(response => {
        const { ok, message } = response;
        setIsActive(true);
        ok ? toast.success(message) : toast.error(message)
      });
  };

  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <form className={styles.form}>
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
          <Input value={password} onChange={(e) => setPassword(e.target.value)}
            style={{ marginTop: 10 }}
            placeholder='Password'
            type='password'
          />
        </div>
        <Button onClick={buttonClickHandler} disabled={!isActive}>{isActive ? title : "Loading..."}</Button>
      </form>
      { children }
    </div>
  );
};

export default AuthForm;