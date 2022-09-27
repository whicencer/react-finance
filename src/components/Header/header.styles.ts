import styled from 'styled-components';

export const dropdownButtonStyles = {
  cursor: 'pointer'
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
    &>button {
      display: inline-block;
    }
  }
`;