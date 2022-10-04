import React, { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage/LandingPage'
import Ranking from './pages/Ranking/Ranking'

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
