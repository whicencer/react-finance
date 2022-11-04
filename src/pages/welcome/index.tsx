import React from 'react';

import { useDispatch } from 'react-redux';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../app/config/firebase';

import Flex from '../../components/Flex';
import Button from '../../shared/ui/Button';

import { setUser } from '../../store/slices/user';
import { useDocumentTitle } from '../../app/hooks/useDocumentTitle';

import styles from './styles.module.scss';

const Welcome = () => {
  useDocumentTitle('React Finance - Welcome');
  const dispatch = useDispatch();

  const SignInWithGoogle = () => {
    try {
      signInWithPopup(auth, new GoogleAuthProvider())
        .then(result => {
          const {displayName, email, photoURL, uid} = result.user;
          const payload = {
            displayName: displayName,
            email: email,
            photoUrl: photoURL,
            uid: uid,
          };
          dispatch(setUser(payload));
        });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Flex justifyContent="center" padding="10px 0">
        <h2 style={{ fontFamily: 'Archivo', fontWeight: '400' }}>
          REACT FINANCE
        </h2>
      </Flex>
      <Flex justifyContent="space-around" alignItems="center">
        <Flex
          style={{ height: '90vh', zIndex: 2 }}
          direction="column"
          justifyContent="center"
          padding="0 30px"
        >
          <h1 className={styles.welcomeTitle}>
            Manage your finance with <br /> React Finance
          </h1>
          <Button onClick={SignInWithGoogle} style={{ marginTop: '20px' }}>Get Started</Button>
        </Flex>
        <img className={styles.welcomeImage} src={require('../../assets/home.gif')} alt="shape" />
      </Flex>
    </>
  );
};

export default Welcome;
