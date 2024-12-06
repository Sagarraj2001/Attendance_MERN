import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate ,Link} from 'react-router-dom';

function Show() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const [selectedUser, setSelectedUser] = useState(null); // State to store selected user's data
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3001/showapi/show')
            .then(response => setUsers(response.data))
            .catch(err => console.log(err));
    }, []);

    axios.defaults.withCredentials = true;

    const handleEdit = (user) => {
        navigate('/attendance', { state: user }); // Pass user data for editing
      };
      
    
    

    const openModal = (user) => {
        setSelectedUser(user); // Set selected user data
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedUser(null); // Clear selected user data
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="container my-5">
                <div className="table-responsive">
                    <h1 className='text-center'>Student's Data <Link type="button" to="/attendance" className="btn btn-danger mx-3">Add New</Link></h1>
                    <hr />
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Department</th>
                                <th scope="col">Year</th>
                                <th scope="col">Semester</th>
                                <th scope="col">Section</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user => (
                                    <tr key={user.id}>
                                        <th scope="row">{user.date}</th>
                                        <td>{user.dept}</td>
                                        <td>{user.year}</td>
                                        <td>{user.sem}</td>
                                        <td>{user.sect}</td>
                                        <td>
                                            {/* <button type="button" className="btn btn-success ms-1">Edit</button> */}
                                            <button type="button" className="btn btn-success ms-1" onClick={() => handleEdit(user)}>Edit</button>
                                            <button type="button" className="btn btn-warning mx-1" onClick={() => openModal(user)}>View</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && selectedUser && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div
                            className="modal show"
                            id="staticBackdrop"
                            tabIndex="-1"
                            aria-labelledby="staticBackdropLabel"
                            aria-hidden="true"
                            style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} // Ensures modal backdrop is visible
                        >
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5 " id="staticBackdropLabel">
                                            Student Attendance
                                        </h1>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            onClick={closeModal}
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    <div className="modal-body">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Mode</th>
                                                    <th scope="col">Boys</th>
                                                    <th scope="col">Girls</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Hostel</td>
                                                    <td>{selectedUser.hBoys}</td>
                                                    <td>{selectedUser.hGirls}</td>
                                                </tr>
                                                <tr>
                                                    <td>Day-Scholar</td>
                                                    <td>{selectedUser.cbBoys}</td>
                                                    <td>{selectedUser.cbGirls}</td>
                                                </tr>
                                                <tr>
                                                    <td>Out-Bus</td>
                                                    <td>{selectedUser.obBoys}</td>
                                                    <td>{selectedUser.obGirls}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="col">Total Strength</th>
                                                    <td>{selectedUser.total}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="col">Total Present</th>
                                                    <td>{selectedUser.totPresent}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="col">Total Absent</th>
                                                    <td>{selectedUser.totAbsent}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="col">% Present</th>
                                                    <td>{((selectedUser.totPresent * 100) / selectedUser.total).toFixed(2)}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Show;
