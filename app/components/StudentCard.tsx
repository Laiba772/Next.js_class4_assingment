// StudentCard.js
import React from 'react';

interface topos{
  name : string;
  age : number;
  rollNumber : number;
  className : string|number;
}


const StudentCard = (props:topos) => {
  return (
    <div className="bg-pink-100 shadow-md rounded-lg p-6 m-4 max-w-xs w-full">
      <h1 className="text-xl font-bold mb-2">{props.name}</h1>
      <p className="text-gray-700 mb-1"><strong>Age:</strong> {props.age}</p>
      <p className="text-gray-700 mb-1"><strong>Roll Number:</strong> {props.rollNumber}</p>
      <p className="text-gray-700 mb-1"><strong>Class:</strong> {props.className}</p>
    </div>
  );
};

export default StudentCard;
