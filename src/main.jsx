import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './context/AppContext.jsx'
import { ToastContainer } from 'react-toastify'
// import AppContextProvider from './context/AppContext.js'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
     <AppContextProvider>
      <App />
      
     </AppContextProvider>
     <ToastContainer/>
   </BrowserRouter>
    
  
)
