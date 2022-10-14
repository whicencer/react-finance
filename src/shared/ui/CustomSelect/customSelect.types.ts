type Options = Array<{ value: string, label: string }>;

export interface ICustomSelectProps {
  options: Options,
  styles?: React.CSSProperties | undefined,
  setAction: React.Dispatch<React.SetStateAction<any>>,
  disabled?: boolean | undefined
}