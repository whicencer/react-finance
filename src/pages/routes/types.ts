import React from 'react';

export interface RouteComponent {
  path: string;
  component: React.FC;
  exact: boolean;
  key: string;
}
