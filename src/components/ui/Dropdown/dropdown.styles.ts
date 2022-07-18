import styled from 'styled-components';

export const DropdownStyles = styled.div<{popupActive: boolean}>`
  background-color: ${(props) => props.theme.colors.secondaryColor};
  display: inline-block;
  visibility: ${(props) => props.popupActive ? 'visible' : 'hidden'};
  opacity: ${(props) => props.popupActive ? 1 : 0};
  transition: .1s;
  width: 200px;
  padding: 4px;
  border-radius: 8px;
  position: absolute;
  top: 60px;
  right: 50px;
`;
export const DropdownButton = styled.li`
  padding: 10px 15px;
  border-radius: 4px;
  margin: 2px 0;
  
  &:hover {
    background-color: #1E1E24;
  }
`;