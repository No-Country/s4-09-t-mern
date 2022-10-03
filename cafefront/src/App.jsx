import React, { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './components/LandingPage'
import Ranking from './Link.jsx/Ranking'

function App () {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="ranking" element={<Ranking />}></Route>
      </Routes>
    </>
  )
}

export default App
