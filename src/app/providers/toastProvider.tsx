import React from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line react/display-name
const ToastProvider = (Component: React.FC) => () => {
  return (
    <>
      <Component />
      <ToastContainer position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default ToastProvider;