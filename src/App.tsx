

import './App.css'
import Login from './login'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Dashboard from './dashboard';
import Teacherlist from './teacherlist';
//import TeacherDashboard from './TeacherDashboard';
//import SeperateStudentList from './seperatestudentlist';
import TeacherDashboard from "./TeacherDashboard";

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/create-teacher' element={<Teacherlist />} />
        <Route path='/teacher-dashboard' element={<TeacherDashboard />} />
        {/* <Route path="/teacher-dashboard" element={<TeacherDashboard />} /> */}
        {/* <Route path="/studentlists" element={<SeperateStudentList />} /> */}
      </Routes>
    </Router>
      
    </>
  )
}

export default App
