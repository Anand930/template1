import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode >
    <Router>
      <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
