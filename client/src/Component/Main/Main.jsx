import React from 'react'
import Login from '../Authentication/Login';


export default function Main() {
  return (
    <>
      <div>
        <div className="card mb-3 mt-2 mx-3">
          <div className="row g-0">
            <div className="col-md-6">
              <img className="rounded p-1" style={{ height: "100%", objectFit: "cover", width: "100%" }} src="https://images.shiksha.com/mediadata/images/1524741363phpciQ13V.png" alt="img" />
            </div>
            <div className="col-md-6">
              <div className="card-body border-0">
                <Login/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
