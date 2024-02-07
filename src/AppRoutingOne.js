import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePages'
import NotFoundPage from './pages/404/NotFoundPage'
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/profilePage';
import TaskListComponent from './components/container/task_list';
import TaskDetailPage from './pages/tasks/TaskDetailPage';


function AppRoutingOne() {
  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>| Home|</Link>
          <Link to='/about'>| About |</Link>
          <Link to='/faqs'> | FAQs |</Link>
          <Link to='/profilePage'> | Profile |</Link>
        </aside>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/faqs' element={<AboutPage />} />
            <Route path='/profilePage' element={<ProfilePage />} />
            <Route path='/taskPage' element={<TaskListComponent/>}/>
            <Route path='/task/:id' element={<TaskDetailPage/>}/>
          </Routes>
        </main>
      </div>
      
    </Router>
    
  )
}

export default AppRoutingOne;
