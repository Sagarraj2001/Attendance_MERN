import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/api/login', { email, pass })
            .then(result => {
                if (result.data === "success") {
                    navigate('/attendance')
                }
                else {
                    alert("enter the Correct detials");
                }

            })
            .catch(err => console.log(err))
        setEmail('')
        setPass('')
    }

    return (
        <>
            <div className="container h-100 mt-5">
                <div className="row d-flex justify-content-center align-items-center h-100 ">
                    <div className="card shadow-2-strong mb-5" style={{ borderRadius: "1rem" }}>
                        <div className="card-body border-0">

                            <h1 className=" text-center mb-3 display-1"><ion-icon name="person-circle-outline" style={{ color: "#d74338" }}></ion-icon></h1>

                            <form onSubmit={handleSubmit}>
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control form-control-lg" value={email} onChange={e => setEmail(e.target.value)} required />
                                </div>

                                <div data-mdb-input-init className="form-outline mb-4 ">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control form-control-lg" value={pass} onChange={e => setPass(e.target.value)} required />
                                </div>


                                <div className="d-grid gap-2 col-8 mx-auto mb-3">
                                    <button className="btn btn-danger" type="submit">Login</button>
                                </div>
                            </form>
                            <div className=' mt-3 text-center '>
                                <p>don't have an account? <Link className='text-danger text-decoration-underline' to="/signup">Register here</Link></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
