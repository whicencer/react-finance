// import React, { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Flex from '@shared/ui/Flex';
import Button from '@shared/ui/Button';

import { useDocumentTitle } from '@hooks/useDocumentTitle';

import welcomeImage from '@assets/home.gif';

import styles from './welcome.module.scss';
// import { useSignInWithGoogle } from './Welcome.hooks/useSignInWithGoogle';

const Welcome = () => {
  useDocumentTitle('React Finance - Welcome');
  const navigate = useNavigate();

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
        <Button className={styles.welcomeButton} onClick={() => navigate('/signup')}>Get started</Button>
      </Flex>
      <img className={styles.welcomeImage} src={welcomeImage} alt="shape" />
    </Flex>
  );
};

export default Welcome;
