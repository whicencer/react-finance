import styled from 'styled-components';
import { DropdownStyles } from '../dropdown.styles';

export const ContextMenuStyles = styled(DropdownStyles)<{x: number, y: number}>`
  top: ${props => props.y}px;
  left: ${props => props.x+200 >= window.innerWidth ? `calc(${window.innerWidth}-200px)` : `${props.x}px`};
`;