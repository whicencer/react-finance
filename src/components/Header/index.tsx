import { signOut } from 'firebase/auth';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { auth } from '../../app/config/firebase';
import { useAuth } from '../../app/hooks/useAuth';
import { signOutUser } from '../../store/slices/userSlice';
import LogoLink from './LogoLink';
import StyledLink from './StyledLink';

const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondaryColor};
  padding: 16px 24px;

  @media screen and (max-width: 706px) {
    & {
      flex-direction: column;
    }
  }
`;

const Header = () => {
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
      <button onClick={logoutUser}>
        <h4>{user.displayName}</h4>
      </button>
    </HeaderComponent>
  );
};

export default Header;
