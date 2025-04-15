// src/pages/Courses.js
import React, { useState, useEffect } from 'react';

function Courses() {
  const [courses, setCourses] = useState([]);

  // Mock fetching courses - in a real world app, replace with API call
  useEffect(() => {
    const mockCourses = [
      { id: 1, title: 'Mathematics 101', description: 'Introduction to Algebra and Calculus' },
      { id: 2, title: 'Physics 202', description: 'Fundamentals of Mechanics and Thermodynamics' },
      { id: 3, title: 'Computer Science 303', description: 'Data Structures and Algorithms' }
    ];
    setCourses(mockCourses);
  }, []);

  return (
    <div className="courses">
      <h2>Your Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;
