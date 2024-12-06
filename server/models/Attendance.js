const mongoose = require('mongoose')
//schema is a model of data
const attendanceSchema = new mongoose.Schema({
    dept:String,
    date:String,
    year:String,
    sem:String,
    sect:String,
    total:String,
    hBoys:String,
    cbBoys:String,
    obBoys:String,
    hGirls:String,
    cbGirls:String,
    obGirls:String,
    totPresent:String,
    totAbsent:String

})
const attendanceModel = mongoose.model("attendance", attendanceSchema) //faculty is a model

module.exports = attendanceModel