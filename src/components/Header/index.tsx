import React, { useState } from 'react';
import { useAuth } from '../../app/hooks/useAuth';
import LogoLink from './LogoLink';
import StyledLink from '../StyledLink';
import Dropdown from '../ui/Dropdown';
import { dropdownButtonStyles, HeaderComponent } from './header.styles';
import { useLogout } from '../../app/hooks/useLogout';
import MobileMenu from '../MobileMenu';

import { GiHamburgerMenu } from 'react-icons/gi';
import { useAwayClick } from '../../app/hooks/useAwayClick';

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
        <StyledLink to={'/dashboard'}>Home</StyledLink>
        <StyledLink to={'/investments'}>Investments</StyledLink>
        <StyledLink to={'/transactions'}>Transactions</StyledLink>
      </nav>
      <span style={dropdownButtonStyles} onClick={(e) => {
        e.stopPropagation();
        setDropdownOpen(prev=>!prev);
      }}>
        {user.displayName}
      </span>
      <Dropdown
        dropdownList={
          [
            { text: 'Logout', onClick: logout }
          ]
        }
        isActive={isDropdownOpen}
      />
      <button onClick={() => setBurgerOpen(!isBurgerOpen)} style={{background: 'none', border: 'none', cursor: 'pointer'}}>
        <GiHamburgerMenu size={30} color={'#fff'} />
      </button>
      <MobileMenu isBurgerOpen={isBurgerOpen} />
    </HeaderComponent>
  );
};

export default Header;