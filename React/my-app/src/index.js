import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CatalogItem from './Components/CatalogItem';

const root = ReactDOM.createRoot(document.getElementById('root'));
const kormTab = ReactDOM.createRoot(document.getElementsByClassName('catalog__content')[0]);
const defenseTab = ReactDOM.createRoot(document.getElementsByClassName('catalog__content')[1]);
const foodTab = ReactDOM.createRoot(document.getElementsByClassName('catalog__content')[2]);
root.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>
);
kormTab.render(
    <React.StrictMode>
        <CatalogItem name="Cool korm" />
    </React.StrictMode>
);
defenseTab.render(
    <React.StrictMode>
        <CatalogItem />
        <CatalogItem />
    </React.StrictMode>
);

foodTab.render(
    <React.StrictMode>
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
