// StudentList.js
import React from 'react';
import StudentCard from './StudentCard';

const StudentList = () => {
  const students = [
    { name: 'Laiba Naz', age: 19, rollNumber: 181078, className: 'Monday 2 to 5' },
    { name: 'Saba Gul', age: 20, rollNumber: 102, className: '12th Grade' },
    { name: 'Atiqa', age: 10, rollNumber: 103, className: '4th Grade' },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {students.map((student, index) => (
        <StudentCard 
          key={index} 
          name={student.name} 
          age={student.age} 
          rollNumber={student.rollNumber} 
          className={student.className} 
        />
      ))}
    </div>
  );
};

export default StudentList;
