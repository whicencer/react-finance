import styled from 'styled-components';

export const Card = styled.div<{themeId: number}>`
  position: relative;
  display: flex;
  justify-content: space-between;
  background: ${props => {
    switch(props.themeId) {
      case 1: return props.theme.colors.cardBackground[1];
      case 2: return props.theme.colors.cardBackground[2];
      case 3: return props.theme.colors.cardBackground[3];
    }
  }};
  background-size: cover;
  border-radius: 20px;
  padding: 10px 25px;
  margin: 0 10px;
  max-width: 225px;
  height: 150px;
  min-width: 250px;
`;