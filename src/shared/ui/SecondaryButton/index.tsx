import styled from "styled-components";

const SecondaryButton = styled.button`
  background-color: ${(props) => props.theme.colors.gray9};
  color: #fff;
  border-radius: 6px;
  border: none;
  padding: 10px 35px;
  font-family: ${(props) => props.theme.defaultFontFamily};
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  transition: .5s;
  
  &:hover {
    box-shadow: 0 0 15px ${(props) => props.theme.colors.gray9};
  }
`;

export default SecondaryButton;