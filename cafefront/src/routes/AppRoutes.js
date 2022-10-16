import React, { Navigate, Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage/LandingPage'
import Login from '../pages/Login/Login'
import Ranking from '../pages/Ranking/Ranking'
import Register from '../pages/Register/Register'
import { useUserStore } from '../redux/hooks/useUser'

export const AppRoutes = () => {
  // eslint-disable-next-line no-unused-vars
  const { user, setUser } = useUserStore()

  return (
    <Routes>
      {user && (
        <>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
      {user === null && (
        <>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  )
}
