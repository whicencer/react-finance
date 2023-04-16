export interface IProps {
  title: string;
  // eslint-disable-next-line no-unused-vars
  clickHandler: (username: string, password: string) => void;
  children?: React.ReactElement
}