import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import "bulma/css/bulma.css";

const theme = extendTheme({});

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        limit={2}
      />
      {/* <Component {...pageProps} /> */}
      {/* <Login /> */}
      <Signup />
    </ChakraProvider>
  );
}

export default App;
