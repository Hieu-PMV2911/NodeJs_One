// get the client
import mysql  from 'mysql2';

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'nodejs_one'
});

// simple query
// connection.query(
//   'SELECT * FROM `users` ',
//   function(err, results, fields) {
// 	console.log("connect success");
//     console.log(results); // results contains rows returned by server
//   }
// );

export default connection