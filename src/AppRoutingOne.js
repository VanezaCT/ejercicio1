import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePages'
import NotFoundPage from './pages/404/NotFoundPage'

function AppRoutingOne() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path='./pages/404/NotFoundPage.jsx' Component={<AppRoutingOne/>} />
      </Routes>
    </Router>

  )
}

export default AppRoutingOne;
