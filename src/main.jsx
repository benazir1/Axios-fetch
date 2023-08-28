import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Axios from './Axios.jsx'
import axios from "axios";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Axios/>
  </React.StrictMode>,
)
