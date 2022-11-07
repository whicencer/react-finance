type Options = Array<{ value: string, label: string }>;

export interface ICustomSelectProps {
  options: Options,
  value?: any;
  styles?: React.CSSProperties | undefined,
  setAction: React.Dispatch<React.SetStateAction<any>>,
}