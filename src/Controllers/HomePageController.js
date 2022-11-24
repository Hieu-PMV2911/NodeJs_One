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

const postAddUsersPage = async (req, res) => {
	const {First_name, Last_name, email, address} = req.body;
	if(First_name == "" || Last_name == ""|| email == "" || address == ""){
		return res.send("add user fail");		
	}else{
		await connection.execute("insert into users (First_name, Last_name, email, address) values (?,?,?,?)", 
		[First_name, Last_name, email, address]);
		return res.redirect("/");

	}
}

const getEditPage = async (req, res) => {
	let id = req.params.id;
	const [user, fields] = await connection.execute("SELECT * FROM users where id = ?", [id]);
	return res.render("editUser.ejs",{editUser: user});
}

const putUpdatePage = async (req, res) =>{
	let id = req.params.id;
	const {First_name, Last_name, email, address} = req.body;
	await connection.execute("UPDATE users SET First_name = ?, Last_name = ?, email = ?, address = ? WHERE id = ?", [First_name, Last_name, email, address,id]);
	return res.redirect("/");
}

const getDeletePage = async (req, res) => {

	let id = req.params.id;
	await connection.execute("DELETE FROM users WHERE id = ?", [id]);
	return res.redirect("/");
	
}

				


module.exports = {
	HomePageControllers,
	getDetailPage,
	postAddUsersPage,
	getEditPage,
	putUpdatePage,
	getDeletePage
}
