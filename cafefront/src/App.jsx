import React, { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage/LandingPage'
import Login from './pages/Login/Login'
import Ranking from './pages/Ranking/Ranking'
import Register from './pages/Register/Register'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'

function App () {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="ranking" element={<Ranking />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
      </Provider>
    </>
  )
}

export default App
