
import React, { useState } from 'react';

function UniversityCourseModulePanel() {
  const [moduleName, setModuleName] = useState('');
  const [moduleCode, setModuleCode] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [courseName, setCourseName] = useState('');
  const [modules, setModules] = useState([]);

  const handleSubmit = () => {
    const newModule = {
      moduleName,
      moduleCode,
      startDate,
      endDate,
      courseName
    };
    setModules([...modules, newModule]);
    alert("Module Added:\n" + JSON.stringify(newModule, null, 2));
  };

  return (
    <div>
      <h3>Enter Module Details</h3>
      <input type="text" placeholder="Module Name" onChange={(e) => setModuleName(e.target.value)} />
      <input type="text" placeholder="Module Code" onChange={(e) => setModuleCode(e.target.value)} />
      <input type="date" placeholder="Start Date" onChange={(e) => setStartDate(e.target.value)} />
      <input type="date" placeholder="End Date" onChange={(e) => setEndDate(e.target.value)} />
      <input type="text" placeholder="Course Name" onChange={(e) => setCourseName(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default UniversityCourseModulePanel;
