import React from 'react';

import Flex from '../../shared/ui/Flex';
import Button from '../../shared/ui/Button';

import { useDocumentTitle } from '../../app/hooks/useDocumentTitle';

import styles from './welcome.module.scss';
import { useSignInWithGoogle } from './Welcome.hooks/useSignInWithGoogle';

const Welcome = () => {
  useDocumentTitle('React Finance - Welcome');
  const signInWithGoogle = useSignInWithGoogle();

  return (
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
        <Button className={styles.welcomeButton} onClick={signInWithGoogle}>Get started</Button>
      </Flex>
      <img className={styles.welcomeImage} src={require('../../assets/home.gif')} alt="shape" />
    </Flex>
  );
};

export default Welcome;
