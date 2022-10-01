import styled from 'styled-components';

export const DropdownStyles = styled.div<{isActive: boolean}>`
  background-color: ${(props) => props.theme.colors.secondaryColor};
  display: ${(props) => props.isActive ? 'inline-block' : 'none'};
  opacity: ${(props) => props.isActive ? 1 : 0};
  transition: .1s;
  width: 200px;
  padding: 4px;
  border-radius: 8px;
  position: absolute;

  top: 50px;
  right: 60px;
`;

export const DropdownButton = styled.li`
  padding: 10px 15px;
  border-radius: 4px;
  margin: 2px 0;

  cursor: pointer;
  
  &:hover {
    background-color: #1E1E24;
  }
`;