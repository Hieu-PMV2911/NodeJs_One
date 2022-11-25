import express from "express"
import viewEngine from "./config/viewConfig"
import webRoute from "./Routers/webRoute"
import apiWeb from "./Routers/api"
import connection from "./config/connectDB"
const methodOverride = require('method-override')
require("dotenv").config();

const app = express()
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(methodOverride('_method'))

//set up engine 
viewEngine(app);

//set up routes
webRoute(app);

//set up api
apiWeb(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})