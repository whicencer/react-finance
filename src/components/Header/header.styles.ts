import styled from 'styled-components';

export const dropdownButtonStyles = {
  cursor: 'pointer'
};

export const burgerButton = {
  display: 'block',
  width: '25px',
  height: '2px',
  backgroundColor: '#fff',
  margin: '6px 0',
  transition: '0.4s',
};

export const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondaryColor};
  padding: 16px 24px;
  &>button {
    display: none;
  }
  
  @media screen and (max-width: 706px) {
    &>nav {
      display: none;
    }
    &>span {
      display: none;
    }
    &>button {
      display: inline-block;
    }
  }
`;