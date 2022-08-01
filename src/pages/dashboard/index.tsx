import React from 'react';

import { DashboardContent } from './dashboard.styles';
import { AddCreditCard } from './dashboard.styles';

import Header from '../../components/Header';
import CreditCard from '../../components/CreditCard';
import Flex from '../../components/Flex';
import { Separator } from '../../components/Separator/Separator';
import LineChart from '../../components/LineChart';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <DashboardContent>
        <Flex alignItems={'center'} justifyContent={'space-between'} style={{ marginBottom: '24px' }}>
          <h2>Dashboard</h2>
          <AddCreditCard>Add Credit Card</AddCreditCard>
        </Flex>
        <Flex style={{ overflowY: 'auto', paddingBottom: '20px' }} alignItems={'center'}>
          <CreditCard />
          <CreditCard />
          <CreditCard />
        </Flex>
        <Separator />
        <h2>Statistic</h2>
        <LineChart />
      </DashboardContent>
    </div>
  );
};

export default Dashboard;
