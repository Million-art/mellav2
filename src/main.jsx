import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { KonstaProvider, Block, Button } from 'konsta/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <KonstaProvider theme="ios" >

    <React.StrictMode>
      <App />
    </React.StrictMode>
  </KonstaProvider>

)
