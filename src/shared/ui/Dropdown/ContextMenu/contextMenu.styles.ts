import styled from 'styled-components';
import { DropdownStyles } from '../dropdown.styles';

export const ContextMenuStyles = styled(DropdownStyles)<{x: number, y: number}>`
  top: ${props => props.y}px;
  left: calc(${props => props.x}px - 105px);
`;