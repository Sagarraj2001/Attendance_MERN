const bp=require("bcrypt")
const jwt = require('jsonwebtoken'); 
const facultyModel = require("../models/faculty")

exports.register=async (req,res)=>{
    const {email,name,pass,mob,dept}=req.body
    if(!email || !name || !pass||!mob||!dept)
    {
        return res.json("enter Data")
    }
    const password=await bp.hash(pass,10)
    const data= await facultyModel.create({
    name,email,dept,mob,
    pass:password
   })
res.status(201).json(data)

}
exports.login=async (req,res)=>{
    const{email,pass}=req.body;
    facultyModel.findOne({email:email})
    .then(user=>{
        if(user){
            bp.compare(pass,user.pass,(err,response)=>{
                if(response){
                    const token=jwt.sign({email:user._id},process.env.JWT_SECERET,{expiresIn:"1d"})
                    res.cookie("token",token); 
                    res.json("success")
                }
                else{
                    res.json("the password is incorrect")
                }
            })
        }
        else{
            res.json("no record exist")
        }
    })
}