import React from 'react';

const courses = [
  { name: 'Angular', date: '4/5/2021' },
  { name: 'React', date: '6/3/2021' }
];

const CourseDetails = () => {
  return (
    <div className="section">
      <h2>Course Details</h2>
      {courses.length > 0 ? (
        courses.map((course, index) => (
          <div key={index}>
            <strong>{course.name}</strong>
            <p>{course.date}</p>
          </div>
        ))
      ) : (
        <p>No courses found</p>
      )}
    </div>
  );
};

export default CourseDetails;
