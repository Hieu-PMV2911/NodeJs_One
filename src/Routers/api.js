import express from "express"
import ApiPageController from "../Controllers/ApiPageController"

const route = express.Router();
const apiWeb = (app) => {
	route.get('/', ApiPageController.ApiPageControllers);
	route.get('/detail-user/:id', ApiPageController.getDetailPage);
	route.post('/add-user', ApiPageController.postAddUsersPage);
	route.get('/edit-user/:id', ApiPageController.getEditPage);
	route.put('/update-user/:id', ApiPageController.putUpdatePage);
	route.delete('/delete-user/:id', ApiPageController.getDeletePage);


	// return app.use("/detail/user/:id", route);
	return app.use("/api/v1", route);
}

export default apiWeb