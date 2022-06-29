import styled, { keyframes } from 'styled-components';

const titleAnimate = keyframes`
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;
export const WelcomeTitle = styled.h1`
  font-size: 55px;
  animation: ${titleAnimate} 1s linear;

  @media screen and (max-width: 730px) {
    font-size: 50px;
  }
  @media screen and (max-width: 410px) {
    font-size: 40px;
  }
`;
export const StyledImg = styled.img`
  @media screen and (max-width: 945px) {
    display: none;
  }
`;