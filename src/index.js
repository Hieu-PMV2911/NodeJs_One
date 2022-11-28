import express from "express"
import viewEngine from "./config/viewConfig"
import webRoute from "./Routers/webRoute"
import apiWeb from "./Routers/api"
import connection from "./config/connectDB"
import notFoundError from "./Routers/notFound404"
const formidable = require('formidable');
const methodOverride = require('method-override')
require("dotenv").config();
const morgan = require('morgan')

const app = express()
const port = process.env.PORT || 8000;

app.use(morgan('combined'))

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

//not found 404
notFoundError(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})