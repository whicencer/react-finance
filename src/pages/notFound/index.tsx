import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

const NotFoundComponent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;
const NotFoundText = styled.h1`
  font-size: 160px;
`;

const NotFound = () => {
  const [timer, setTimer] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setTimer(timer-1);
      if (timer === 1) {
        navigate('/dashboard');
      }
    }, 1000);
  });

  return (
    <NotFoundComponent>
      <NotFoundText>404</NotFoundText>
      <h2>PAGE NOT FOUND</h2>
      Redirect in {timer}
    </NotFoundComponent>
  );
};

export default NotFound;
