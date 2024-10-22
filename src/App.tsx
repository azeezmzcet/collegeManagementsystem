import "./App.css";
import Login from "./login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./maindashboard";
import Teacherlist from "./teacherlist";
import TeacherDashboard from "./TeacherDashboard";
import CourseManager from "./courseManager";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-teacher" element={<Teacherlist />} />
          <Route path="/studentlists" element={<TeacherDashboard />} />
          <Route path="/courses" element={<CourseManager />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
