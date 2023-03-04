import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDocumentTitle } from '../../app/hooks/useDocumentTitle';
import { NotFoundComponent, NotFoundText } from './notFound.styles';

const NotFound = () => {
  const [timer, setTimer] = useState(5);
  const navigate = useNavigate();
  useDocumentTitle('React Finance - Not found 404');

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
