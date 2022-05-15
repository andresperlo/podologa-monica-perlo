import React from 'react'
import HomePages from './pages/HomePages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router className>
      <Routes>
        <Route exact path="/" element={<HomePages />} />
      </Routes>
    </Router>
  );
}

export default App;
