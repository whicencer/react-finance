import React from 'react';
import styled from 'styled-components';
import LogoLink from './LogoLink';
import StyledLink from './StyledLink';

const HeaderComponent = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondaryColor};
  padding: 16px 24px;

  @media screen and (max-width: 706px) {
    & {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      align-content: center;
      justify-items: center;
    }
  }
`;

const Header = () => {
  return (
    <HeaderComponent>
      <LogoLink to={'/'}>REACT FINANCE</LogoLink>
      <nav>
        <StyledLink to={'/'}>Home</StyledLink>
        <StyledLink to={'/investments'}>Investments</StyledLink>
        <StyledLink to={'/about'}>About</StyledLink>
      </nav>
    </HeaderComponent>
  );
};

export default Header;
