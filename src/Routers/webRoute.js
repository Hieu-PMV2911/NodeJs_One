import express from "express"
import homePageController from "../Controllers/HomePageController"

const route = express.Router();
const webRoute = (app) => {
	route.get('/', homePageController.HomePageControllers);
	route.get('/detail/user/:id', homePageController.getDetailPage);
	route.put('/edit/user/:id', homePageController.getEditPage);
	route.delete('/delete/user/:id', homePageController.getDeletePage);


	// return app.use("/detail/user/:id", route);
	return app.use("/", route);
}

export default webRoute