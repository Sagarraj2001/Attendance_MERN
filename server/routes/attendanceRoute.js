const express=require('express')
const attendance=require('../controller/attendanceController')

const router=express.Router()
router.get("/attendance",attendance.authentication);
router.put('/attendance/:id', attendance.updateAttendance);
router.post("/attendance",attendance.createAttendance);



module.exports=router