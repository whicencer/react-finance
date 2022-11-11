import styled from "styled-components";

export const PageButton = styled.button`
  border: 2px solid #1e1e24;
  border-radius: 6px;
  outline: none;
  padding: 7px;
  background-color: transparent;
  color: #fff;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  transition: .2s;
  font-family: ${(props) => props.theme.defaultFontFamily};
  
  &:hover {border-color: blue;}
`;