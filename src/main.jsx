import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx'
import Articles from './pages/Articles.jsx'
import Speaking from './pages/Speaking.jsx'
import Uses from './pages/Uses.jsx'
import Projects from './pages/Projects.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode >
    <Router>
      <Routes>
            <Route index element= {<Home/>}/>
            <Route path='about' element= {<About/>}/>
            <Route path='articles' element= {<Articles/>}/>
            <Route path='projects' element= {<Projects/>}/>
            <Route path='speaking' element= {<Speaking/>}/>
            <Route path='uses' element= {<Uses/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
)
