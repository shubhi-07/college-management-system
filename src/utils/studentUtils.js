// utils/studentUtils.js

// studentUtils.js
export const filterStudentsByYear = (students = [], year) => {
  if (!year) return students; // Return all students if no year is specified
  return students.filter(student => student.year === year);
};

  