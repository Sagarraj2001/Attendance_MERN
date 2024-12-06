const mongoose=require('mongoose')
//schema is a model of data
const facultySchema=new mongoose.Schema({ 
    name:String,
    mob:Number,
    dept:String,
    email:String,
    pass:String
})

const facultyModel=mongoose.model("faculty",facultySchema) //faculty is a model

module.exports=facultyModel