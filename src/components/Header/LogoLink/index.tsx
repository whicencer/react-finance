import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoLink = styled(Link)`
  color: #fff;
  font-size: ${(props) => props.theme.typography.logo.size};
  font-weight: ${(props) => props.theme.typography.logo.weight};
  font-family: ${(props) => props.theme.defaultFontFamily};

  @media screen and (max-width: 500px) {
    & {
      display: none;
    }
  }
`;

export default LogoLink;
