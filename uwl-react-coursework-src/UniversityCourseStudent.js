
import React from 'react';

function UniversityCourseStudent(props) {
  return (
    <div>
      <h2>Student Name: {props.name}</h2>
      <p>Student ID: {props.studentId}</p>
      <p>Course Name: {props.courseName}</p>
      <p>Course Start Date: {props.courseStartDate}</p>
    </div>
  );
}

export default UniversityCourseStudent;
