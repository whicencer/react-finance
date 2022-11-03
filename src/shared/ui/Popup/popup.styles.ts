import styled from 'styled-components';

export const PopupContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;

  transition: .5s;
  transition-timing-function: cubic-bezier(.2,0,.2,.1);
  
  background-color: rgba(0, 0, 0, 0.4);
`;

export const PopupInner = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.secondaryColor};
  border-radius: 20px;
  padding: 30px;
  color: #fff;
  min-width: 30%;
  width: 420px;
`;