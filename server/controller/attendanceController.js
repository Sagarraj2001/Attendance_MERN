const attendanceModel=require('../models/Attendance')
const jwt = require('jsonwebtoken');

//authentication after login
exports.authentication = (req, res) => {
  if(!req.user)
  {
      return "authenticate"
  }

  return res.status(200).json("success");
};

exports.updateAttendance = async (req, res) => {
  const { id } = req.params;
  const {
    dept,
    date,
    year,
    sem,
    sect,
    total,
    hBoys,
    cbBoys,
    obBoys,
    hGirls,
    cbGirls,
    obGirls,
    totPresent,
    totAbsent,
  } = req.body;

  try {
    const updatedAttendance = await attendanceModel.findByIdAndUpdate(
      id,
      {
        dept,
        date,
        year,
        sem,
        sect,
        total,
        hBoys,
        cbBoys,
        obBoys,
        hGirls,
        cbGirls,
        obGirls,
        totPresent,
        totAbsent,
      },
      { new: true, runValidators: true }
    );

    if (!updatedAttendance) {
      return res.status(404).json({ error: 'Attendance record not found' });
    }

    res.status(200).json({
      message: 'Data has been updated successfully',
      data: updatedAttendance,
    });
  } catch (error) {
    res.status(500).json({ error: 'Error updating attendance record', details: error.message });
  }
};


exports.createAttendance = async (req, res) => {
    try {
      const newAttendance = new attendanceModel(req.body);
      await newAttendance.save();
      res.status(201).json({ message: 'Data is successfully registered' });
    } catch (error) {
      res.status(500).json({ error: 'Error creating attendance record' });
    }
  };


