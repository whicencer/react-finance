import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoLink = styled(Link)`
  color: #fff;
  font-size: ${(props) => props.theme.typography.logo.size};
  font-weight: ${(props) => props.theme.typography.logo.weight};
  font-family: ${(props) => props.theme.typography.logo.font};
`;

export default LogoLink;
