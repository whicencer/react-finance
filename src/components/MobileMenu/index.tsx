import React from 'react';
import { MobileMenuStyled } from './mobileMenu.styles';
import StyledLink from '../StyledLink';

interface Props {
  isBurgerOpen: boolean;
}

const MobileMenu: React.FC<Props> = ({ isBurgerOpen }) => {
  return (
    <MobileMenuStyled isBurgerOpen={isBurgerOpen}>
      <StyledLink to={'/dashboard'}>Home</StyledLink>
      <StyledLink to={'/investments'}>Investments</StyledLink>
      <StyledLink to={'/transaction'}>Transaction</StyledLink>
    </MobileMenuStyled>
  );
};

export default MobileMenu;