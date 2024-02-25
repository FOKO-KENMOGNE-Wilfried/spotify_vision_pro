import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from './style/GlobalStyle.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={ <App /> } />
      </Routes>
    </Router>
  </React.StrictMode>,
)
