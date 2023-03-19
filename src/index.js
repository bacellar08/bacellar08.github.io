import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.js'
import './reset.css'
import './index.css'
import Modal from 'react-modal'

Modal.setAppElement('#root');

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App/>)