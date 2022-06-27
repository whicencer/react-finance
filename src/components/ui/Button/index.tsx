import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.azureColor};
  color: #fff;
  border-radius: 6px;
  border: none;
  padding: 15px 40px;
  font-family: ${(props) => props.theme.defaultFontFamily};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: .5s;
  
  &:hover {
    box-shadow: 0 0 30px ${(props) => props.theme.colors.azureColor};
    transform: translateX(20px)
  }
`;

export default Button;
