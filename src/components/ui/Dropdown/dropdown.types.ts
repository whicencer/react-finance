export interface DropdownPropsType {
  dropdownList: Array<{ text: string, onClick: () => void }>;
  isActive: boolean;
}