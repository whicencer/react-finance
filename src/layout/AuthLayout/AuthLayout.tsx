import styles from '@components/AuthForm/styles.module.scss';
import { FormEventHandler, ReactNode } from 'react';

interface AuthLayoutProps {
  title: string;
  children: ReactNode;
  additionalText?: ReactNode;
}
export const AuthLayout = ({ title, children, additionalText }: AuthLayoutProps) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <div className={styles.form}>
        { children }
      </div>
      { additionalText }
    </div>
  );
};