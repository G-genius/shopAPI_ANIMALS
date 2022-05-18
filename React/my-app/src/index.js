import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
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
        <CatalogItem />
    </React.StrictMode>
);
defenseTab.render(
    <React.StrictMode>
        <CatalogItem />
    </React.StrictMode>
);

foodTab.render(
    <React.StrictMode>
        <CatalogItem />
    </React.StrictMode>
);

