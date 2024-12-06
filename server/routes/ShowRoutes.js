const express=require('express')
const {show}=require('../controller/ShowController')
const router=express.Router()

router.get("/show",show)

module.exports=router