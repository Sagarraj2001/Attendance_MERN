import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Signup() {
    const [name, setName] = useState();
    const [mob, setMob] = useState();
    const [dept, setDept] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/api/registration', { name, mob, dept, email, pass }) //registration is database name
            .then(result => {
                console.log(result)
                alert("Registered Successfully")
            })
            .catch(err => console.log(err))
        setName('')
        setMob('')
        setDept('')
        setEmail('')
        setPass('')
    }
    return (
        <>
            <section className="vh-100 ">
                <div className="container py-2 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="card shadow-2-strong mb-5" >

                            <div className="card-body ">
                                <h2 className="mb-3 text-center">Faculty Registration</h2>
                                <form onSubmit={handleSubmit}>
                                    <div data-mdb-input-init className="form-outline mb-2">
                                        <label className="form-label">Name With Initial</label>
                                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
                                    </div>
                                    <div data-mdb-input-init className="form-outline mb-2">
                                        <label className="form-label">Mobile No.</label>
                                        <input type="text" className="form-control" maxLength={10} value={mob} onChange={(e) => setMob(e.target.value)} required />
                                    </div>
                                    <div data-mdb-input-init className="form-outline mb-2">
                                        <label className="form-label" >Department</label>
                                        <input type="text" className="form-control" value={dept} onChange={(e) => setDept(e.target.value)} required />
                                    </div>
                                    <div data-mdb-input-init className="form-outline mb-2">
                                        <label className="form-label">Your Email</label>
                                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    </div>
                                    <div data-mdb-input-init className="form-outline mb-2">
                                        <label className="form-label">Password</label>
                                        <input type="password" className="form-control" value={pass} onChange={(e) => setPass(e.target.value)} required />
                                    </div>
                                    <div className="d-grid gap-2 col-8 mx-auto mb-3">
                                        <button className="btn btn-danger" type="submit">Register</button>
                                    </div>
                                </form>

                                <div className='mt-3 text-center'>
                                    <p>Already have an account? <Link className='text-danger text-decoration-underline' to="/">Login Here</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
