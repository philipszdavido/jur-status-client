import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import drizzle functions and contract artifact
import { Drizzle, generateStore } from "@drizzle/store";
import JurStatus from "./contracts/JurStatus.json";

// let drizzle know what contracts we want
const options = { 
  contracts: [JurStatus],
  web3: {
    vechain: true,
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:9545"
    }
  } 
}

// setup the drizzle store and drizzle
const drizzleStore = generateStore(options);

const drizzle = new Drizzle(options, drizzleStore);

ReactDOM.render(
  <React.StrictMode>
    <App drizzle={drizzle} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
