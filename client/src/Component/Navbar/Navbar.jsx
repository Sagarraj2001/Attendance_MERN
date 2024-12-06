import React from 'react'

export default function Navbar() {
    return (
        <>
            <div>
                <ul className="nav justify-content-center bg-danger text-white">
                    <li className="nav-item text-center ">
                        <h1>Attendance Management System</h1>
                    </li>
                </ul>
            </div>
            <div>
        <ul className="nav justify-content-center mt-1">
          <li className="nav-item mx-3">
            <img src="https://content3.jdmagicbox.com/comp/perambalur/k7/9999p4328.4328.120323114336.l1k7/catalogue/dhanalakshmi-srinivasan-engineering-college-perambalur-ho-perambalur-colleges-011wowlbzz.jpg" alt="Bootstrap" height="100px" />
          </li>
          <li className="nav-item mx-5" style={{ color: "blue", textAlign: "center" }}>
            <h1 className="mb-0">Dhanalakshmi Srinivasan </h1>
            <h1 className="mb-0">Engineering College</h1>
            <h4>(Autonomous)</h4>
          </li>
          <li className="nav-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShurXvgbY6zNtWvBSJfeVURydAImUB4OFHhw&s" height="100px" alt="logo" />
          </li>
        </ul>
      </div>
        </>
    )
}
