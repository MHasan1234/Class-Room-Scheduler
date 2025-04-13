import React, { useEffect, useState } from 'react';

const ClassroomList = ({ day, time }) => {
  const [classrooms, setClassrooms] = useState([]);

  useEffect(() => {
    if (day && time) {
      fetch(`http://localhost:5000/api/classrooms?day=${day}&time=${time}`)
        .then((res) => res.json())
        .then((data) => {
          setClassrooms(data);
        })
        .catch((err) => console.error('Error fetching classrooms:', err));
    }
  }, [day, time]);

  return (
    <div>
      <h3>Available Classrooms</h3>
      {classrooms.length > 0 ? (
        <ul>
          {classrooms.map((room, index) => (
            <li key={index}>
              <strong>{room.name}</strong> - Capacity: {room.capacity}
            </li>
          ))}
        </ul>
      ) : (
        <p>No classrooms available for the selected day and time.</p>
      )}
    </div>
  );
};

export default ClassroomList;
