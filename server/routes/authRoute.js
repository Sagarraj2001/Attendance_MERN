const express=require("express")
const { register, login } = require("../controller/authController")


const router=express.Router()


router.post("/registration",register)
router.post("/login",login)



module.exports=router