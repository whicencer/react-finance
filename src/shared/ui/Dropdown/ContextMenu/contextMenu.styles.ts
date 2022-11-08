import styled from 'styled-components';
import { DropdownStyles } from '../dropdown.styles';

export const ContextMenuStyles = styled(DropdownStyles)<{x: number, y: number}>`
  top: ${props => props.y}px;
  left: ${props => {
    if (props.x+200 > window.innerWidth) {
      return `calc(${window.innerWidth}-200px)`;
    } else if (props.x <= 0) {
      return `${props.x - props.x + 20}px`;
    } else {
      return `${props.x}px`;
    }
  }};
`;