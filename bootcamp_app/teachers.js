const { pool } = require('./students');

const cohortName = process.argv[2];

const queryString = `
SELECT DISTINCT teachers.name
FROM teachers
JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id
JOIN students ON assistance_requests.student_id = students.id
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name = $1;
`;

const values = [cohortName];

pool.query(queryString, values)
  .then(res => {
    res.rows.forEach(teacher => {
      console.log(teacher.name);
    });
  })
  .catch(err => console.error('query error', err.stack));