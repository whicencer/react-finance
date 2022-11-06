import React from "react";
import { Offline } from "../../components/Offline";
import { useOnline } from "../hooks/useOnline";

// eslint-disable-next-line react/display-name
const CheckOnlineProvider = (Component: React.FC) => () => {
  const isOnline = useOnline();

  return (
    isOnline ? <Component /> : <Offline />
  );
};

export default CheckOnlineProvider;