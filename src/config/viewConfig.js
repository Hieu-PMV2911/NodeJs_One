import express from "express";	

const viewEngine = (app) => {
	app.use("view engine", "ejs");
	app.set("app", "src/view");
}

export default viewEngine