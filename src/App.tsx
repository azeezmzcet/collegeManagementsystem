

import './App.css'
import Login from './login'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Dashboard from './dashboard';
import Teacherlist from './teacherlist';
//import TeacherDashboard from './TeacherDashboard';
//import SeperateStudentList from './seperatestudentlist';
import TeacherDashboard from "./TeacherDashboard";
import CourseManager from './courseManager';
//import TeachersDropdown from './teacherdropdown';

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/create-teacher' element={<Teacherlist />} />
        <Route path='/studentlists' element={<TeacherDashboard course={'course'}  />} />
        {/* <Route path='/TeachersDropdown' element={<TeacherDashboard />} /> */}
        {/* <Route path="/teacher-dashboard" element={<TeacherDashboard />} /> */}
        {/* <Route path="/studentlists" element={<SeperateStudentList />} /> */}
        {/* <Route path="/TeachersDropdown" element={<TeachersDropdown />} />  */}
        <Route path="/courses" element={<CourseManager />} /> 
        
      </Routes>
    </Router>
      
    </>
  )
}

export default App
