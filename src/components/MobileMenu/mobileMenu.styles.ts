import styled from 'styled-components';

interface Props {
  isBurgerOpen: boolean;
}

export const MobileMenuStyled = styled.div<Props>`
  transform: ${(props) => props.isBurgerOpen ? `translateX(0)` : `translateX(-400px)`};
  transition: .3s;
  position: absolute;
  top: 8%;
  background-color: #0f0f13;
  opacity: ${(props) => props.isBurgerOpen ? `1` : `0`};
  visibility: ${(props) => props.isBurgerOpen ? `visible` : 'hidden'};
  width: 100%;
  height: 15%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;