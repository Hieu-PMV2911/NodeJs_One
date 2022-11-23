import connection from "../config/connectDB"

const HomePageControllers = (req, res) => {
	let data = [];
	connection.query(
		'SELECT * FROM `users` ',
		function(err, results, fields) {
			console.log("connect success");
			data = results.map((row) => {return row});
			console.log(results); // results contains rows returned by server
			return res.render("index.ejs", {dataUser: JSON.stringify(data)});
			
		}		
	);

	console.log("====check==== :", typeof (data), {dataUser: JSON.stringify(data)} )
}

module.exports = {
	HomePageControllers
}