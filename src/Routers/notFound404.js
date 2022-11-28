import express from "express"

const notFoundError = (app) => {
	app.use((req, res, next) => {
		res.send("Not Found 404")
	})
}

export default notFoundError


