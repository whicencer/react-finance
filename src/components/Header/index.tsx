import React, { useRef, useState } from 'react';
import { useAuth } from '../../app/hooks/useAuth';
import LogoLink from './LogoLink';
import StyledLink from './StyledLink';
import Dropdown from '../ui/Dropdown';
import ClickAwayListener from '../ClickAwayListener';
import { burgerButton, dropdownButtonStyles, HeaderComponent } from './header.styles';
import { useLogout } from '../../app/hooks/useLogout';

const Header = () => {
  const [ isDropdownOpen, setDropdownOpen ] = useState(false);
  const [ isMenuActive, setIsMenuActive ] = useState(false);
  const dropdownButton = useRef<HTMLButtonElement>(null);
  const { user } = useAuth();
  const [ logout ] = useLogout();
  
  return (
    <HeaderComponent>
      <LogoLink to={'/'}>REACT FINANCE</LogoLink>
      <nav>
        <StyledLink to={'/'}>Home</StyledLink>
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
              { text: 'Logout', onClick: logout },
            ]
          }
          isActive={isDropdownOpen}
        />
      </ClickAwayListener>
      <button onClick={() => setIsMenuActive(!isMenuActive)} style={{background: 'none', border: 'none', cursor: 'pointer'}}>
        <span style={burgerButton}></span>
        <span style={burgerButton}></span>
        <span style={burgerButton}></span>
      </button>
      <div style={{
        transform: `${isMenuActive ? 'translateX(0)' : 'translateX(-400px)'}`,
        transition: '.3s',
        position: 'absolute',
        top: '8%',
        backgroundColor: '#0F0F13',
        opacity: `${isMenuActive ? '1' : '0'}`,
        width: '100%',
        height: '20%',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '20px',
      }}>
        <a href='#'>Home</a>
        <a href='#'>Investments</a>
        <a href='#'>Transactions</a>
      </div>
    </HeaderComponent>
  );
};

export default Header;