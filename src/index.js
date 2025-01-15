import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./assests/font.css"
import Router from './Router';
import { ToastContainer, ToastContentProps, toast } from 'react-toastify';
import style from "./toast.module.css"






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ToastContainer position='top-center'
   
   
    />
    <Router />
  </React.StrictMode>
);

