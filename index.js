const express=require("express")
const app=express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const dotenv=require("dotenv")
dotenv.config()
const MongodbConnection=require("./Config/Database")
MongodbConnection()
// -------------------ImageUpload---------------//
app.use("/Uploads",express.static("Uploads"))
// ************ApiRouter***//
const ApiRouter=require("./Route/ApiRouter")
app.use(ApiRouter)
const port=3333
app.listen(port,()=>{
    console.log(`server is running http://localhost:${port}`);
})