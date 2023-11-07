import { ReactNode } from 'react';
import styles from '@layout/AuthLayout/styles.module.scss';

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