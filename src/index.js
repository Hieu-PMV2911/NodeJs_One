import express from "express"
import viewEngine from "./config/viewConfig"
import webRoute from "./Routers/webRoute"
require("dotenv").config();

const app = express()
const port = process.env.PORT || 8000;

//set up engine 
viewEngine(app);

//set up routes
webRoute(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})