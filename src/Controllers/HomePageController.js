import connection from "../config/connectDB"
import mysql from 'mysql2/promise';
// import bluebird from 'bluebird';
const HomePageControllers = async (req, res) => {
	//  connection.query("SELECT * FROM `users`", function(err, rows, fields) {
	// 	return res.render("index.ejs", {dataUser: rows});
	// })
	const [rows, fields] = await connection.execute("SELECT * FROM `users`");
	return res.render("index.ejs", {dataUser: rows});
}

const getDetailPage = async (req, res) => {
	let id = req.params.id;
	const [user, fields] = await connection.execute("SELECT * FROM users where id = ?", [id]);
	return res.render("detailUser.ejs",{detailUser: user});
	// return res.send(id)
}

const getEditPage = async (req, res) => {
	let id = req.params.id;
	const [user, fields] = await connection.execute("SELECT * FROM users where id = ?", [id]);
	return res.render("editUser.ejs",{editUser: user});
	return res.send("edit")
}

const getDeletePage = async (req, res) => {
	let id = req.params.id;
	const [user, fields] = await connection.execute("SELECT * FROM users where id = ?", [id]);
	return res.send(user)
	// ({deleteUser: user});
	// return res.send("deltete")
	
}

				


module.exports = {
	HomePageControllers,
	getDetailPage,
	getEditPage,
	getDeletePage
}
