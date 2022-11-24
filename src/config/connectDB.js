// get the client
import mysql  from 'mysql2/promise';

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'nodejs_one',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


export default connection