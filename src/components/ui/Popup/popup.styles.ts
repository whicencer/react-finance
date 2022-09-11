import styled from 'styled-components';
import { IPopupStyledProps } from './popup.types';

export const PopupContainer = styled.div<IPopupStyledProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: rgba(0, 0, 0, 0.4);
  opacity: ${(props) => props.isActive ? '1' : '0'};
  pointer-events: ${(props) => props.isActive ? 'all' : 'none'};
`;

export const PopupInner = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.secondaryColor};
  border-radius: 20px;
  padding: 30px;
  color: #fff;
  min-width: 30%;
`;