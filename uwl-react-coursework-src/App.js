
import React from 'react';
import UniversityCourseStudent from './UniversityCourseStudent';
import UniversityCourseModulePanel from './UniversityCourseModulePanel';
import Modules from './Modules';

function App() {
  const moduleData = [
    {
      name: 'Programming Basics',
      code: 'CS101',
      startDate: '2024-01-01',
      endDate: '2024-05-01',
      courseName: 'Computer Science',
      students: ['John Doe', 'Jane Smith']
    },
    {
      name: 'Data Structures',
      code: 'CS102',
      startDate: '2024-01-01',
      endDate: '2024-05-01',
      courseName: 'Computer Science',
      students: ['Alice Johnson', 'Bob Brown']
    },
    {
      name: 'Web Development',
      code: 'CS103',
      startDate: '2024-01-01',
      endDate: '2024-05-01',
      courseName: 'Computer Science',
      students: ['Charlie Lee', 'Dana White']
    }
  ];

  return (
    <div>
      <UniversityCourseStudent 
        name="Emad Eltigani" 
        studentId="21405996" 
        courseName="Computer Science" 
        courseStartDate="2024-01-01"
      />
      <UniversityCourseModulePanel />
      <Modules modules={moduleData} />
    </div>
  );
}

export default App;
