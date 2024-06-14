const UserModel=require("../Model/UserModel")
const path=require("path")
const fs=require("fs")
class ApiController{
    AddUser=async(req,res)=>{
        try{
            const{title}=req.body
            const adduser=new UserModel({
                title
            })
            if(req.file){
                adduser.Image=req.file.path  
            }
            const response=await adduser.save()
            if(response){
                return res.status(201).json({
                    message:"data added",
                    data:response
                })
            }
        }catch(error){
            return res.status(500).json({
                error:error.message
            })
        }
    }
    // *******************AllUser*************//
     AllUser=async(req,res)=>{
        try{
            const alluser=await UserModel.find({status:1})
            if(alluser){
                return res.status(201).json({
                    message:"all user data get done..",
                    data:alluser
                })
            }
        }catch(error){
            return res.status(500).json({
               error:error.message
            })
        }
     }
    //  **********************EditUser******************//
    EditUser=async(req,res)=>{
        try{
            const id=req.params.id
            const edituser=await UserModel.findById(id)
            if(edituser){
                return res.status(201).json({
                    message:"edit data get",
                    edit:edituser
                })
            }
        }catch(error){
            return res.status(500).json({
                error:error.message
            })
        }
    }
    // ****************UpdateUser*****************//
    UpdateUser=async(req,res)=>{
        try{
            const{title}=req.body
            const id=req.params.id
            const NewImg=req.file.path
            const duplicateimg=await UserModel.findById(id)
            fs.unlinkSync(duplicateimg.Image)
            const updateuser=await UserModel.findByIdAndUpdate(id,{
                title,Image:NewImg
            },{new:true})
           
            if(updateuser){
                return res.status(201).json({
                    message:"data has been updated",
                    data:updateuser
                })
            }
        }catch(error){
            return res.status(500).json({
                error:error.message
            })
        }
    }
    // ******************DeleteUser********************//
    DeleteUser=async(req,res)=>{
        try{
            const id=req.params.id
            const deleteuser=await UserModel.findByIdAndUpdate(id,{status:0})
            fs.unlinkSync(deleteuser.Image)
            if(deleteuser){
                return res.status(201).json({
                    message:"data delete done",
                data:deleteuser,
               
                })
            }
        }catch(error){
            return res.status(500).json({
                error:error.message
            })
        }
    }
}
module.exports=new ApiController()