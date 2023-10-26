import React from 'react'

export default function GetDonorInfoForm() {
  return (
    <div className="container card p-0 shadow my-5" style={{ borderRadius: '30px', overflow: 'hidden' }}>
        <h5 className="card-header text-center py-4 fw-bold" style={{ fontSize: '32px', color: 'white', background: 'var(--red)' }}> Fill Your Details to Donate Blood</h5>
        <div className="card-body my-4 mx-3">
            <form className='py-3'>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                Full Name
                </label>
                <input
                type="name"
                className="form-control"
                id="exampleInputname"
                aria-describedby="nameHelp"
                />
            </div>
            <div className="mb-3">
                <label className="form-label">
                Select your Blood Group
                </label>
                {/* Blood Group Select Menu */}
                <select className="form-select mb-3 fw-lighter" aria-label="Default select example">
                  <option selected className='fw-lighter'>Select Blood Group</option>
                  <option value="1">A+</option>
                  <option value="2">A-</option>
                  <option value="3">B+</option>
                  <option value="3">B-</option>
                  <option value="3">O+</option>
                  <option value="3">O-</option>
                  <option value="3">AB+</option>
                  <option value="3">AB-</option>
                </select>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail" className="form-label">
                Email id
                </label>
                <input
                type="email"
                className="form-control"
                id="exampleInputEmail"
                />
            </div>
            <div className="mb-3">
                <label for="exampleInputPhone" className="form-label">
                Phone no.
                </label>
                <input
                type="Number"
                className="form-control"
                id="exampleInputPhone"
                />
            </div>
            <div className="mb-3">
                <label for="exampleInputAddress" className="form-label">
                Address
                </label>
                <textarea
                type="password"
                rows="4"
                className="form-control"
                id="exampleInputAddress"
                />
            </div>
            <button type="submit" className="btn btn-danger rounded-pill py-2 px-3 mt-4">Submit</button>

            </form>
        </div>
    </div>
  )
}
