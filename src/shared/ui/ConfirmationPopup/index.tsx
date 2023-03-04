/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Button from '../Button';
import SecondaryButton from '../SecondaryButton';
import styles from './ConfirmationPopup.module.scss';

interface IConfirmationPopupProps {
  confirmText: string;
  confirmCallback: any;
  isActive: boolean;
  setIsActive: any;
}

export const ConfirmationPopup: React.FC<IConfirmationPopupProps> = ({ confirmText, confirmCallback, isActive, setIsActive }) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setIsActive(false);
      }}
      className={isActive ? styles.confirmOuter : styles.confirmNotActive}
    >
      <div className={styles.confirmPopup}>
        <h3>{ confirmText }</h3>

        <div className={styles.buttons}>
          <Button onClick={confirmCallback}>Yes</Button>
          <SecondaryButton onClick={() => setIsActive(false)} style={{ marginLeft: '25px' }}>No</SecondaryButton>
        </div>
      </div>
    </div>
  );
};