import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./layout";
import { Provider } from "react-redux";
import { store } from "./store/store";


ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('root')
);

