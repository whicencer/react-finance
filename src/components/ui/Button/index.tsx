import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.theme.colors.azureColor};
  color: #fff;
  border-radius: 6px;
  padding: 15px 40px;
  font-family: ${(props) => props.theme.defaultFontFamily};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: .5s cubic-bezier(0,.37,.36,.97);

  &:hover {
    transform: translateX(20px)
  }
`;

export default Button;
