const multer=require("multer")
const path=require("path")

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"Uploads")
    },
    filename:(req,file,cb)=>{
        let ext=path.extname(file.originalname)
        cb(null,Date.now()+ext)
    }
})
const ImageUpload=multer({
    storage:storage,
    fileFilter:(req,file,cb)=>{
        if(
            file.mimetype=="image/png"||
            file.mimetype=="image/jpg"||
            file.mimetype=="image/jpeg"

        ){
            cb(null,true)
        }else{
            console.log(`select valid file folder..`);
        }
    },limits:{
        fieldSize:1024*1024*1024
    }
})
module.exports=ImageUpload