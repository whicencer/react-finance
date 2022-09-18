import styled from 'styled-components';

export const DashboardContent = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
max-width: 960px;
margin: 0 auto;
`;

export const AddCreditCard = styled.button`
  border: 2px solid #1e1e24;
  border-radius: 6px;
  outline: none;
  padding: 7px;
  background-color: transparent;
  color: #fff;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  transition: .2s;
  
  &:hover {border-color: blue;}
`;

export const AddCardPopupTitle = styled.h2`
  padding: 15px;
`;