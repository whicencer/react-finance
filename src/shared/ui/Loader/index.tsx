import React from 'react';
import styled, { keyframes } from 'styled-components';

const loaderAnimation = keyframes`
  0% {
    transform: translateX(0);
    transform: translateY(0);
  }
  25% {
    transform: translate(0, 100%);
  }
  50% {
    transform: translate(100%, 100%);
  }
  75% {
    transform: translate(100%, 0);
  }
`;

const Loader = styled.div`
  border: 1px solid ${(props) => props.theme.colors.azureColor};
  border-radius: 20%;
  width: 100px;
  height: 100px;
  padding: 3px;

  &::before {
    background-color: ${(props) => props.theme.colors.whiteColor};
    color: ${(props) => props.theme.colors.azureColor};
    width: 50px;
    height: 50px;
    content: '$';
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    animation: ${loaderAnimation} infinite 1s;
    border-radius: 20%;
  }
`;

const LoaderComponent = () => {
  return (
    <div style={{ display: 'flex', height: '90vh', alignItems: 'center', justifyContent: 'center' }}>
      <Loader />
    </div>
  );
};

export default LoaderComponent;
