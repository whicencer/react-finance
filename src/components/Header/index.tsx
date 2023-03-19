import React, { useState } from 'react';
import { useAuth } from '@hooks/useAuth';
import { useLogout } from '@hooks/useLogout';
import LogoLink from './LogoLink';
import StyledLink from '../StyledLink';
import { dropdownButtonStyles, HeaderComponent } from './header.styles';
import MobileMenu from '../MobileMenu';

import { GiHamburgerMenu } from 'react-icons/gi';
import { useAwayClick } from '../../app/hooks/useAwayClick';
import Droplist from '../../shared/ui/Dropdown/Droplist';
import { ChangeCurrency } from '../ChangeCurrency';

const Header = () => {
  // Dropdown
  const [ isDropdownOpen, setDropdownOpen ] = useState(false);
  useAwayClick(() => setDropdownOpen(false));

  const [isBurgerOpen, setBurgerOpen] = useState(false);

  const { user } = useAuth();
  const [ logout ] = useLogout();
  
  return (
    <HeaderComponent>
      <LogoLink to={'/dashboard'}>REACT FINANCE</LogoLink>
      <nav>
        <StyledLink to={'/dashboard'}>Dashboard</StyledLink>
        <StyledLink to={'/investments'}>Investments</StyledLink>
        <StyledLink to={'/transactions'}>Transactions</StyledLink>
      </nav>
      <div style={{ display: 'flex', position: 'relative' }}>
        <p onClick={(e) => {
          e.stopPropagation();
          setDropdownOpen(prev=>!prev);
        }} style={dropdownButtonStyles}>{user.displayName}</p>

        <Droplist
          dropdownList={
            [
              { text: 'Logout', onClick: logout }
            ]
          }
          isActive={isDropdownOpen}
        />
        <ChangeCurrency />
      </div>
      <button onClick={(e) => {
        e.stopPropagation();
        setBurgerOpen(!isBurgerOpen);
      }} style={{background: 'none', border: 'none', cursor: 'pointer'}}>
        <GiHamburgerMenu size={30} color={'#fff'} />
      </button>
      <MobileMenu setBurgerOpen={setBurgerOpen} isBurgerOpen={isBurgerOpen} />
    </HeaderComponent>
  );
};

export default Header;