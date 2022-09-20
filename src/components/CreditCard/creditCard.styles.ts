import styled from 'styled-components';

export const Card = styled.div<{themeId: number}>`
  position: relative;
  display: flex;
  justify-content: space-between;
  background: ${props => props.themeId === 1 ? props.theme.colors.cardBackground[1] : props.theme.colors.cardBackground[2]};
  background-size: cover;
  border-radius: 20px;
  padding: 10px 25px;
  margin: 0 10px;
  max-width: 225px;
  height: 150px;
  min-width: 250px;
`;