import React from 'react';
import Button from '../Button';
import SecondaryButton from '../SecondaryButton';
import styles from './ConfirmationPopup.module.scss';

interface IConfirmationPopupProps {
  confirmText: string;
  confirmCallback: any;
  isActive: boolean;
  setIsActive: any
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
          <Button onClick={confirmCallback}>Да</Button>
          <SecondaryButton onClick={() => setIsActive(false)} style={{ marginLeft: '25px' }}>Нет</SecondaryButton>
        </div>
      </div>
    </div>
  );
};