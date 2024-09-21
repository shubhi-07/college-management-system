
import React, { useState } from 'react';
import styles from '../../styles/Admin.module.css';

const CourseManagement = () => {
  const [courses, setCourses] = useState([{ title: 'Mathematics', faculty: 'Dr. Smith' }]);
  const [title, setTitle] = useState('');
  const [faculty, setFaculty] = useState('');

  const addCourse = () => {
    const newCourse = { title, faculty };
    setCourses([...courses, newCourse]);
    setTitle('');
    setFaculty('');
  };

  const deleteCourse = (index) => {
    const newCourses = courses.filter((_, i) => i !== index);
    setCourses(newCourses);
  };

  return (
    <div className={styles.container}>
      <h2>Course Management</h2>
      <input
        type="text"
        placeholder="Course Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.input}
      />
      <input
        type="text"
        placeholder="Faculty Name"
        value={faculty}
        onChange={(e) => setFaculty(e.target.value)}
        className={styles.input}
      />
      <button onClick={addCourse} className={styles.button}>Add Course</button>

      <ul className={styles.list}>
        {courses.map((course, index) => (
          <li key={index} className={styles.listItem}>
            {course.title} - {course.faculty}
            <button onClick={() => deleteCourse(index)} className={styles.deleteButton}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseManagement;