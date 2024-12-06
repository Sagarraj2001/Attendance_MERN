import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Attendance() {
  const navigate = useNavigate()
    // States for form fields
    const [date, setDate] = useState('');
    const [dept, setDept] = useState('');
    const [year, setYear] = useState('');
    const [sem, setSem] = useState('');
    const [sect, setSect] = useState('');
    const [total, setTotal] = useState('');
    const [hBoys, setHBoys] = useState('');
    const [cbBoys, setCbBoys] = useState('');
    const [obBoys, setObBoys] = useState('');
    const [hGirls, setHGirls] = useState('');
    const [cbGirls, setCbGirls] = useState('');
    const [obGirls, setObGirls] = useState('');
    const [totPresent, setTotPresent] = useState('');
    const [totAbsent, setTotAbsent] = useState('');
    const [isLoggingOut, setIsLoggingOut] = useState(false);


  //after login to atttendance page  
  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get('http://localhost:3001/attendanceApi/attendance')
      .then(result => {
        console.log(result);
        if (result.data !== "success") {
          navigate('/');
        }
      })
      .catch(err => {
        console.log('Error during preview verification:', err);

      });
  },[]);

  // Handle log out 
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      setIsLoggingOut(true);
      navigate('/'); // Redirect to the login page
    } else {
      setIsLoggingOut(false);
    }
  };

  //updating data track the data from show page
  const location = useLocation();
  const [editMode, setEditMode] = useState(false); // Track edit mode
  const [id, setId] = useState(null); // ID for edit requests



  // Prefill fields if editing
  useEffect(() => {
    if (location.state) {
      const data = location.state; // Get user data from navigate state
      setEditMode(true);
      setId(data._id); // Assuming `id` is available in user data
      setDate(data.date);
      setDept(data.dept);
      setYear(data.year);
      setSem(data.sem);
      setSect(data.sect);
      setTotal(data.total);
      setHBoys(data.hBoys);
      setCbBoys(data.cbBoys);
      setObBoys(data.obBoys);
      setHGirls(data.hGirls);
      setCbGirls(data.cbGirls);
      setObGirls(data.obGirls);
      setTotPresent(data.totPresent);
      setTotAbsent(data.totAbsent);
    }
  }, [location.state]);

  // Clear form
  const handleClear = () => {
    setDate('');
    setDept('');
    setYear('');
    setSem('');
    setSect('');
    setTotal('');
    setHBoys('');
    setCbBoys('');
    setObBoys('');
    setHGirls('');
    setCbGirls('');
    setObGirls('');
    setTotPresent('');
    setTotAbsent('');
    setEditMode(false);
    setId(null);
  };



  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLoggingOut) {
      return; // Exit the function if logout was confirmed
    }

    const payload = {
      dept, date, year, sem, sect, total,
      hBoys, cbBoys, obBoys, hGirls, cbGirls, obGirls,
      totPresent, totAbsent
    };

    if (editMode) {
      // Update existing record
      axios.put(`http://localhost:3001/attendanceApi/attendance/${id}`, payload)
        .then(() => {
          alert('Data Successfully Updated');
          navigate('/show');
        })
        .catch(err => console.log(err));
    } else {
      // Create new record
      axios.post('http://localhost:3001/attendanceApi/attendance', payload)
        .then(() => {
          alert('Data Successfully Registered');
          navigate('/show');
        })
        .catch(err => console.log(err));
    }
    handleClear();
  };

  return (
    <>
      <div>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100 m-3">
            <div className="card-body ">
              <hr />
              <form onSubmit={handleSubmit}>
                <h2 className="mb-3 text-center">Student's Attendance Registertaion <button className='btn btn-danger' onClick={handleLogout}>LogOut</button></h2>

                <div className="row">
                  <div className="col-6">
                    <div data-mdb-input-init className="form-outline mb-2">
                      <label className="form-label" for="typeNameX-2">Date</label>
                      <input
                        type="date"
                        className="form-control"
                        min="2023-01-01"
                        max={new Date().toISOString().split("T")[0]}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required

                      />

                    </div>
                  </div>
                  <div className="col-6">
                    <div data-mdb-input-init className="form-outline mb-2">
                      <label className="form-label" for="typeNameX-2">Department</label>
                      <select className="form-select" aria-label="Default select example" value={dept} onChange={(e) => setDept(e.target.value)} required >
                        <option value="" disabled selected>Choose Department</option>
                        <option value="AeroSpace">AeroSpace</option>
                        <option value="Aeronautical">Aeronautical</option>
                        <option value="AI&DS">AI&DS</option>
                        <option value="BME">BME</option>
                        <option value="Civil">Civil</option>
                        <option value="CSE">CSE</option>
                        <option value="Chemical">Chemical</option>
                        <option value="ECE">ECE</option>
                        <option value="EEE">EEE</option>
                        <option value="Food Technology">Food Technology</option>
                        <option value="Information Technology">Information Technology</option>
                        <option value="Mechanical">Mechanical</option>
                        <option value="Pharma">Pharma</option>
                        <option value="Robatics">Robatics</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    <div data-mdb-input-init className="form-outline mb-2">
                      <label className="form-label" for="typeNameX-2">Year</label>
                      <select className="form-select" aria-label="Default select example" value={year} onChange={(e) => setYear(e.target.value)} required>
                        <option selected>Choose Your Year</option>
                        <option value="I">I</option>
                        <option value="II">II</option>
                        <option value="III">III</option>
                        <option value="IV">IV</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-3">
                    <div data-mdb-input-init className="form-outline mb-2">
                      <label className="form-label" for="typeNameX-2">Semester</label>
                      <select className="form-select" aria-label="Default select example" value={sem} onChange={(e) => setSem(e.target.value)} required>
                        <option selected>Choose Your Semester</option>
                        <option value="I">I</option>
                        <option value="II">II</option>
                        <option value="III">III</option>
                        <option value="IV">IV</option>
                        <option value="V">V</option>
                        <option value="VI">VI</option>
                        <option value="VII">VII</option>
                        <option value="VIII">VIII</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-3">
                    <div data-mdb-input-init className="form-outline mb-2">
                      <label className="form-label" for="typeNameX-2">Section</label>
                      <select className="form-select" aria-label="Default select example" value={sect} onChange={(e) => setSect(e.target.value)} required>
                        <option selected>Choose Your Section</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-3">
                    <div data-mdb-input-init className="form-outline mb-2">
                      <label className="form-label" for="typeNameX-2">Total Strength</label>
                      <input type="number" className="form-control" min="1" max="100" value={total} onChange={(e) => setTotal(e.target.value)} required />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    <div data-mdb-input-init className="form-outline mb-2">
                      <label className="form-label" for="typeNameX-2">Hostel-Boys</label>
                      <input type="number" className="form-control" min="0" max="69" value={hBoys} onChange={(e) => setHBoys(e.target.value)} required />
                    </div>
                  </div>
                  <div className="col-3">
                    <div data-mdb-input-init className="form-outline mb-2">
                      <label className="form-label" for="typeNameX-2">College-Bus-Boys</label>
                      <input type="number" className="form-control" min="0" max="69" value={cbBoys} onChange={(e) => setCbBoys(e.target.value)} required />
                    </div>
                  </div>
                  <div className="col-3">
                    <div data-mdb-input-init className="form-outline mb-2">
                      <label className="form-label" for="typeNameX-2">Outside-Bus-Boys</label>
                      <input type="number" className="form-control" min="0" max="69" value={obBoys} onChange={(e) => setObBoys(e.target.value)} required />
                    </div>
                  </div>
                  <div className="col-3">
                    <div data-mdb-input-init className="form-outline mb-2">
                      <label className="form-label" for="typeNameX-2">Hostel-Girls</label>
                      <input type="number" className="form-control" min="0" max="69" value={hGirls} onChange={(e) => setHGirls(e.target.value)} required />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    <div data-mdb-input-init className="form-outline mb-2">
                      <label className="form-label" for="typeNameX-2">College-Bus-Girls</label>
                      <input type="number" className="form-control" min="0" max="69" value={cbGirls} onChange={(e) => setCbGirls(e.target.value)} required />
                    </div>
                  </div>
                  <div className="col-3">
                    <div data-mdb-input-init className="form-outline mb-2">
                      <label className="form-label" for="typeNameX-2">Outside-Bus-Girls</label>
                      <input type="number" className="form-control" min="0" max="69" value={obGirls} onChange={(e) => setObGirls(e.target.value)} required />
                    </div>
                  </div>
                  <div className="col-3">
                    <div data-mdb-input-init className="form-outline mb-2">
                      <label className="form-label" for="typeNameX-2">Total Present</label>
                      <input type="number" className="form-control" min="0" max="69" value={totPresent} onChange={(e) => setTotPresent(e.target.value)} required />
                    </div>
                  </div>
                  <div className="col-3">
                    <div data-mdb-input-init className="form-outline mb-2">
                      <label className="form-label" for="typeNameX-2">Total Absent</label>
                      <input type="number" className="form-control" min="0" max="69" value={totAbsent} onChange={(e) => setTotAbsent(e.target.value)} required />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-4">
                  <button type="button" className="btn btn-danger mx-3" onClick={handleClear}>Clear</button>
                  <Link type="button" to="/show" className="btn btn-warning mx-3">Preview</Link>
                  <button type="submit" className="btn btn-success mx-3" > {editMode ? "Update" : "Save"}</button>
                </div>
              </form>

            </div>
          </div>
        </div>


      </div>
    </>
  )
}