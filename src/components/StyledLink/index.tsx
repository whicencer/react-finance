import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  font-size: ${(props) => props.theme.typography.subtitle.size};
  font-weight: ${(props) => props.theme.typography.subtitle.weight};
  color: #d0d0da;
  margin: 0 14px;
  transition: 0.2s;
  
  &.active {
    color: ${(props) => props.theme.colors.azureColor};
    
    &:hover {
      text-shadow: 0 0 10px ${(props) => props.theme.colors.azureColor};
    }
  }
`;

export default StyledLink;
