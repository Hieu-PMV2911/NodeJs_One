import connection from "../config/connectDB"
import mysql from 'mysql2/promise';
// import bluebird from 'bluebird';
const ApiPageControllers = async (req, res) => {
	//  connection.query("SELECT * FROM `users`", function(err, rows, fields) {
	// 	return res.render("index.ejs", {dataUser: rows});
	// })
	const [rows, fields] = await connection.execute("SELECT * FROM `users`");
	return res.status(200).json({
		dataUser: rows
	});
}

const getDetailPage = async (req, res) => {
	let id = req.params.id;
	const [user, fields] = await connection.execute("SELECT * FROM users where id = ?", [id]);
	
	return res.status(200).json({
		dataUser : user
	});
}

const postAddUsersPage = async (req, res) => {
	const {First_name, Last_name, email, address} = req.body;
	if(First_name == "" || Last_name == ""|| email == "" || address == ""){
		return res.send("add user fail");		
	}else{
		await connection.execute("insert into users (First_name, Last_name, email, address) values (?,?,?,?)", 
		[First_name, Last_name, email, address]);
		return res.status(200).json({
			data: "success"
		});
	}
}

const getEditPage = async (req, res) => {
	let id = req.params.id;
	const [user, fields] = await connection.execute("SELECT * FROM users where id = ?", [id]);
	return res.status(200).json({
		dataUser: user
	});
}

const putUpdatePage = async (req, res) =>{
	let id = req.params.id;
	const {First_name, Last_name, email, address} = req.body;
	await connection.execute("UPDATE users SET First_name = ?, Last_name = ?, email = ?, address = ? WHERE id = ?", [First_name, Last_name, email, address,id]);
	return res.status(200).json({
		dataUser: "update success"
	});
}

const getDeletePage = async (req, res) => {

	let id = req.params.id;
	await connection.execute("DELETE FROM users WHERE id = ?", [id]);
	return res.status(200).json({
		dataUser: "delete success"
	});	
}

				


module.exports = {
	ApiPageControllers,
	getDetailPage,
	postAddUsersPage,
	getEditPage,
	putUpdatePage,
	getDeletePage
}
