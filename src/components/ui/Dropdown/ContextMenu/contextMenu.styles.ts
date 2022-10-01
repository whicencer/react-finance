import styled from 'styled-components';
import { DropdownStyles } from '../dropdown.styles';

export const ContextMenuStyles = styled(DropdownStyles)<{x: number, y: number}>`
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  border: 3px solid #fff;
`;