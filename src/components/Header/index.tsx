import React, { useRef, useState } from 'react';
import { useAuth } from '../../app/hooks/useAuth';
import LogoLink from './LogoLink';
import StyledLink from '../StyledLink';
import Dropdown from '../ui/Dropdown';
import ClickAwayListener from '../ClickAwayListener';
import { dropdownButtonStyles, HeaderComponent } from './header.styles';
import { useLogout } from '../../app/hooks/useLogout';
import MobileMenu from '../MobileMenu';

import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  const dropdownButton = useRef<HTMLButtonElement>(null);

  const [ isDropdownOpen, setDropdownOpen ] = useState(false);
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
      <span ref={dropdownButton} style={dropdownButtonStyles} onClick={() => setDropdownOpen(prev=>!prev)}>
        {user.displayName}
      </span>
      <ClickAwayListener currentStatus={isDropdownOpen} buttonRef={dropdownButton} onClickHandler={ () => setDropdownOpen(false) }>
        <Dropdown
          dropdownList={
            [
              { text: 'Logout', onClick: logout }
            ]
          }
          isActive={isDropdownOpen}
        />
      </ClickAwayListener>
      <button onClick={() => setBurgerOpen(!isBurgerOpen)} style={{background: 'none', border: 'none', cursor: 'pointer'}}>
        <GiHamburgerMenu size={30} color={'#fff'} />
      </button>
      <MobileMenu isBurgerOpen={isBurgerOpen} />
    </HeaderComponent>
  );
};

export default Header;