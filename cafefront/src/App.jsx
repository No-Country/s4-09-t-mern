import React, { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage/LandingPage'
import Login from './pages/Login/Login'
import Ranking from './pages/Ranking/Ranking'
import Register from './pages/Register/Register'

function App () {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="ranking" element={<Ranking />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default App
