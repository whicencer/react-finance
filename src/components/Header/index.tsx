import { signOut } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { auth } from '../../app/config/firebase';
import { useAuth } from '../../app/hooks/useAuth';
import { signOutUser } from '../../store/slices/userSlice';
import LogoLink from './LogoLink';
import StyledLink from './StyledLink';
import Dropdown from '../ui/Dropdown';
import ClickAwayListener from '../ClickAwayListener';
import { dropdownButtonStyles } from './header.styles';

const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondaryColor};
  padding: 16px 24px;

  @media screen and (max-width: 706px) {
    &>nav {
      display: none;
    }
    &>span {
      display: none;
    }
    & {
      flex-direction: column;
    }
  }
`;

const Header = () => {
  const [ isDropdownOpen, setDropdownOpen ] = useState(false);
  const dropdownButton = useRef<HTMLButtonElement>(null);
  const { user } = useAuth();
  const dispatch = useDispatch();

  const logoutUser = () => {
    signOut(auth)
      .then(() => dispatch(signOutUser()));
  };
  
  return (
    <HeaderComponent>
      <LogoLink to={'/'}>REACT FINANCE</LogoLink>
      <nav>
        <StyledLink to={'/'}>Home</StyledLink>
        <StyledLink to={'/investments'}>Investments</StyledLink>
        <StyledLink to={'/about'}>About</StyledLink>
      </nav>
      <span ref={dropdownButton} style={dropdownButtonStyles} onClick={() => setDropdownOpen(prev=>!prev)}>
        {user.displayName}
      </span>
      <ClickAwayListener currentStatus={isDropdownOpen} buttonRef={dropdownButton} onClickHandler={ () => setDropdownOpen(false) }>
        <Dropdown
          dropdownList={
            [
              { text: 'Logout', onClick: logoutUser }
            ]
          }
          isActive={isDropdownOpen}
        />
      </ClickAwayListener>
    </HeaderComponent>
  );
};

export default Header;
