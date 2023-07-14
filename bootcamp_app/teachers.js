const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: 'labber',
  host: 'localhost',
  database: 'bootcampx'
});

