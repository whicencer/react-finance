import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  background: ${props => props.theme.colors.cardBackground1};
  border-radius: 20px;
  padding: 10px 25px;
  margin: 0 10px;
  max-width: 225px;
  height: 150px;
  min-width: 250px;
`;