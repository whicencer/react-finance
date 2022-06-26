import React from "react";
import Routing from "../pages/routes";
import { withProviders } from "./providers";

const App = () => {
  return (
    <Routing />
  );
};

export default withProviders(App);