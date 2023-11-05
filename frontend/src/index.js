import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import { AppProviderContext } from "./contextapi/ContextProvider";
import { Provider } from "react-redux";
import store from "./Redux/store/Store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-alice-carousel/lib/alice-carousel.css';
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <>
    <ToastContainer></ToastContainer>
    <Provider store={store}>
      <AppProviderContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppProviderContext>
    </Provider>

  </>
);


reportWebVitals();
