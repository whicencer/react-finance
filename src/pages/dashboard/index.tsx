import React from 'react';
import Header from '../../components/Header';
import styled from 'styled-components';
import CreditCard from '../../components/CreditCard';
import Flex from '../../components/Flex';

const DashboardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 960px;
  margin: 0 auto;
`;
const AddCreditCard = styled.button`
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

const Dashboard = () => {
  return (
    <div>
      <Header />
      <DashboardContent>
        <Flex alignItems={'center'} justifyContent={'space-between'} style={{ marginBottom: '24px' }}>
          <h1>Dashboard</h1>
          <AddCreditCard>Add Credit Card</AddCreditCard>
        </Flex>
        <Flex style={{ overflowY: 'auto', paddingBottom: '20px' }} alignItems={'center'}>
          <CreditCard />
          <CreditCard />
          <CreditCard />
        </Flex>
      </DashboardContent>
    </div>
  );
};

export default Dashboard;
