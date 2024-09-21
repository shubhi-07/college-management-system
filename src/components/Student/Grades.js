import React, { useState } from 'react';
import styles from '../../styles/Student.module.css';

const Grades = () => {
  const [grades, setGrades] = useState([
    { subject: 'Math', grade: 'A' },
    { subject: 'Science', grade: 'B' },
  ]);

  return (
    <div className={styles.grades}>
      <h2 className={styles.gradesHeader}>Your Grades</h2>
      <ul className={styles.gradesList}>
        {grades.map((item, index) => (
          <li key={index} className={styles.gradeItem}>
            <span className={styles.subject}>{item.subject}</span>: 
            <span className={styles.grade}>{item.grade}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Grades;
