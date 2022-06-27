import styled from 'styled-components';

interface IFlexProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  margin?: string;
  padding?: string;
}

const Flex = styled.div<IFlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  align-items: ${(props) => props.alignItems || 'flex-start'};
  margin: ${(props) => props.margin || '0'};
  padding: ${props => props.padding || '0'}
`;

export default Flex;
