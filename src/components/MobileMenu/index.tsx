import React from 'react';
import { MobileMenuStyled } from './mobileMenu.styles';
import StyledLink from '../StyledLink';
import { useAwayClick } from '../../app/hooks/useAwayClick';

interface Props {
  isBurgerOpen: boolean;
  setBurgerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileMenu: React.FC<Props> = ({ isBurgerOpen, setBurgerOpen }) => {
  useAwayClick(() => setBurgerOpen(false));
  
  return (
    <MobileMenuStyled isBurgerOpen={isBurgerOpen}>
      <StyledLink to={'/dashboard'}>Dashboard</StyledLink>
      <StyledLink to={'/investments'}>Investments</StyledLink>
      <StyledLink to={'/transactions'}>Transactions</StyledLink>
    </MobileMenuStyled>
  );
};

export default MobileMenu;