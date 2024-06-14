const mongoose=require("mongoose")

const schema=mongoose.Schema

const userschema=new schema({
    title:{
        type:String,
        required:true
    },
    Image:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:1
    }
})

const UserModel=mongoose.model("user",userschema)
module.exports=UserModel