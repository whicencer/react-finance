import styled from 'styled-components';

export const dropdownButtonStyles = {
  cursor: 'pointer',
  marginRight: 20,
};

export const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondaryColor};
  padding: 16px 32px;
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