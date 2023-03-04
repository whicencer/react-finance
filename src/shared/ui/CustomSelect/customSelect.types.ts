/* eslint-disable @typescript-eslint/no-explicit-any */
type Options = Array<{ value: string | number, label: string }>;

export interface ICustomSelectProps {
  options: Options,
  value?: any,
  styles?: React.CSSProperties | undefined,
  setAction: React.Dispatch<React.SetStateAction<any>>,
  theme?: 'dark' | 'light'
}