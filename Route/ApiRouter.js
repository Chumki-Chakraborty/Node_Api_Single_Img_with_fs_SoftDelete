const express=require("express")
const ApiController = require("../Controller/ApiController")

const ApiRouter=express.Router()
const upload=require("../Utilits/ImgUpload")

ApiRouter.post("/add/user",upload.single("Image"),ApiController.AddUser)
ApiRouter.get("/all/user",ApiController.AllUser)
ApiRouter.get("/edit/user/:id",ApiController.EditUser)
ApiRouter.post("/updateuser/:id",upload.single("Image"),ApiController.UpdateUser)
ApiRouter.get("/delete/user/:id",ApiController.DeleteUser)

module.exports=ApiRouter