//import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
//import './index.css'
//import App from './App.jsx'
//import{ AppContextProvider } from './context/AppContext'
//import { BrowserRouter } from 'react-router-dom'
//
//createRoot(document.getElementById('root')).render(
//  <BrowserRouter>
//  <AppContextProvider>
//    <App />
//  </AppContextProvider>
//  </BrowserRouter>,
//)

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppContextProvider } from './context/Appcontext';
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>,
)
