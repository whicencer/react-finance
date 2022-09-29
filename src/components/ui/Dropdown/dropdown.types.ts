export interface DropdownPropsType {
  dropdownList: Array<{ text: string, onClick: (e?: any) => void }>;
  isActive: boolean;
}