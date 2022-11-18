import React from "react";
import Routing from "../pages/routes";
import { useDocumentTitle } from "./hooks/useDocumentTitle";
import { withProviders } from "./providers";

const App = () => {
  useDocumentTitle('React Finance - Welcome');
  return (
    <Routing />
  );
};

export default withProviders(App);