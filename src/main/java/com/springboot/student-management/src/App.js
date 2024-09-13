import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentList from './components/StudentList Component/StudentList';
import AddStudent from './components/AddStudent Component/AddStudent';
import EditStudent from './components/EditStudent Component/EditStudent';
import ClassList from './components/ClassList/ClassList';
import ClassForm from './components/ClassForm/ClassForm'; 
import SubjectList from './components/SubjectList/SubjectList';
import AddSubject from './components/AddSubject/AddSubject';
import EditSubject from './components/EditSubject/EditSubject';
import TeachersList from './components/TeacherList/TeacherList';
import AddTeacher from './components/AddTeacher/AddTeacher';
import EditTeacher from './components/EditTeacher/EditTeacher';
import StudentSubjectList from './components/StudentSubjectList/StudentSubjectList';
import StudentSubjectForm from './components/AddStudentSubject/AddStudentSubject';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
					<Route path="/" element={<Dashboard />} />
                    {/* Student Routes */}
                    <Route path="/students" element={<StudentList />} />
                    <Route path="/add" element={<AddStudent />} />
                    <Route path="/edit/:id" element={<EditStudent />} />
                    
                    {/* Class Routes */}
                    <Route path="/classes" element={<ClassList />} />
                    <Route path="/add-class" element={<ClassForm />} />
                    <Route path="/edit-class/:id" element={<ClassForm />} />
					
					{/* Subject Routes */}
					<Route exact path="/subjects" element={< SubjectList />} />
			       	<Route exact path="/add-subject" element={< AddSubject />} />
			       	<Route exact path="/edit-subject/:id" element={< EditSubject />} />
					
					{/* Teacher Routes */}
				   
				   <Route path="/teachers" element={<TeachersList />} />
                   <Route path="/add-teacher" element={<AddTeacher />} />
                   <Route path="/edit-teacher/:id" element={<EditTeacher />} />
				   
				   <Route path="/student-subjects" element={<StudentSubjectList />} />
                   <Route path="/add-student-subject" element={<StudentSubjectForm />} />
                   <Route path="/edit-student-subject/:studentId/:subjectId" element={<StudentSubjectForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
