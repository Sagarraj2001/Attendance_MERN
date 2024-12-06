const attendanceModel = require("../models/Attendance");

exports.show = async(req, res) => {
   attendanceModel.find()
      .then(users => res.json(users))
      .catch(err => res.json(err));
}