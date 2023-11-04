import { ReactElement } from 'react';

export interface IProps {
  title: string;
  // eslint-disable-next-line no-unused-vars
  clickHandler: (username: string, password: string) => Promise<{ message: string, ok: boolean }>;
  children?: ReactElement
}