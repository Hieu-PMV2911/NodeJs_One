import express from "express"
import homePageController from "../Controllers/HomePageController"

const route = express.Router();
const webRoute = (app) => {
	route.get('/', homePageController.HomePageControllers);
	route.get('/detail/user/:id', homePageController.getDetailPage);
	route.post('/add/user', homePageController.postAddUsersPage);
	route.get('/edit/user/:id', homePageController.getEditPage);
	route.post('/update/user/:id', homePageController.putUpdatePage);
	route.get('/delete/user/:id', homePageController.getDeletePage);


	// return app.use("/detail/user/:id", route);
	return app.use("/", route);
}

export default webRoute