export interface ContextMenuPropsType {
  // eslint-disable-next-line no-unused-vars
  dropdownList: Array<{ text: string, onClick: (e?: any) => void }>;
  isActive: boolean;
  x: number;
  y: number;
}