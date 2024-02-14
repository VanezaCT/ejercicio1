import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import DashBoard from './pages/dashboard/DashBoard';



function AppRoutingFinal() {

  let loggedIn = true

  return (
    <Router>
      <Routes>
        <Route path='/' element={loggedIn ? <Navigate replace from='/' to='dashboard' /> : <Navigate replace to={'/login'} />}>
        </Route>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={loggedIn ? <DashBoard /> : <Navigate replace from='/' to='login' />}>
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>

  )
}

export default AppRoutingFinal;
