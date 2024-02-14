import { BrowserRouter as Router, Link, Route, Routes, Navigate } from 'react-router-dom'
import HomePages from './pages/home/HomePages'
import NotFoundPage from './pages/404/NotFoundPage'
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/profilePage';
import TaskListComponent from './components/container/task_list';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';
import { useEffect} from 'react';
import StatePage from './pages/home/statePage';


function AppRoutingOne() {
  let logged = false;
  
  

useEffect(() => {
  logged = localStorage.getItem('credentials');
  console.log('User Logged', logged);

},[]);

  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>|| Home|</Link>

          <Link to='/about'>| About |</Link>
          <Link to='/faqs'> | FAQs |</Link>
          <Link to='/profile'> | Profile |</Link>
           <Link to='/task/1'>| Task 1 |</Link>
          <Link to='/task/2'>| Task 2 |</Link> 
          <Link to='/login'>| Login ||</Link>
          
        </aside>
        <main>
          <Routes>
            <Route path="/" element={<HomePages />} />
            <Route path='/online-state' element={<StatePage/>}/>
            <Route path='/login' element={logged ? <HomePages /> : <LoginPage />}/> 
            <Route path='/about' element={<AboutPage />} />
            <Route path='/faqs' element={<AboutPage />} />
            <Route path='/profile' element={logged ? <ProfilePage /> : <Navigate replace to={'/login'} />}/>
            <Route path='/taskPage' element={<TaskListComponent/>}/>
            <Route path='/task/:id' element={<TaskDetailPage/>} />
            <Route  path='*' element={<NotFoundPage/>}/>
          </Routes>
        </main>
      </div>
      
    </Router>
    
  )
}

export default AppRoutingOne;
