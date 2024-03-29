import React from 'react';
import styled from 'styled-components';

export const Card = styled.div<{themeId: number}>`
  display: flex;
  justify-content: space-between;
  background: ${props => {
    return props.theme.colors.cardBackground[props.themeId as keyof {
      1: string;
      2: string;
      3: string;
    }];
  }};
  background-size: cover;
  border-radius: 20px;
  padding: 10px 25px;
  margin: 16px;
  max-width: 225px;
  height: 150px;
  min-width: 250px;
  transition: cubic-bezier(.6,.1,.22,.68) .4s;
  cursor: pointer;
`;

export const cardSecondSection: React.CSSProperties = { position: 'relative', top: '-10px', right: '-5%' };