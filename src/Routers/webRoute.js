import express from "express"
import homePageController from "../Controllers/HomePageController"

const route = express.Router();
const webRoute = (app) => {
	route.get('/', homePageController.HomePageControllers);


	return app.use("/", route);
}

export default webRoute