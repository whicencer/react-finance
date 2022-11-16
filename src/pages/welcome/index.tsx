import React from 'react';

import { useDispatch } from 'react-redux';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../app/config/firebase';

import Flex from '../../shared/ui/Flex';
import Button from '../../shared/ui/Button';

import { setUser } from '../../store/slices/user';
import { useDocumentTitle } from '../../app/hooks/useDocumentTitle';

import styles from './welcome.module.scss';
import { toast } from 'react-toastify';

const Welcome = () => {
  useDocumentTitle('React Finance - Welcome');
  const dispatch = useDispatch();

  const SignInWithGoogle = () => {
    try {
      signInWithPopup(auth, new GoogleAuthProvider())
        .then(result => {
          const {displayName, email, photoURL, uid} = result.user;
          const payload = {
            displayName,
            email,
            photoUrl: photoURL,
            uid
          };
          dispatch(setUser(payload));
        });
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  return (
    <>
      <Flex justifyContent="space-around" alignItems="center">
        <Flex
          style={{ height: '95vh', zIndex: 2 }}
          direction="column"
          justifyContent="center"
          padding="0 30px"
        >
          <h1 className={styles.welcomeTitle}>
            Manage your finance with
            <br />
            <span className={styles.welcomeTitleGradient}>React Finance</span>
          </h1>
          <Button className={styles.welcomeButton} onClick={SignInWithGoogle}>Get started</Button>
        </Flex>
        <img className={styles.welcomeImage} src={require('../../assets/home.gif')} alt="shape" />
      </Flex>
    </>
  );
};

export default Welcome;
