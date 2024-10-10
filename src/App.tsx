

import './App.css'
import Login from './login'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Dashboard from './dashboard';
import Teacherlist from './teacherlist';

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/create-teacher' element={<Teacherlist />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
