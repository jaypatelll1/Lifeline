import React, { useState } from 'react';

const TableWithModal = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="container mb-5">
      {/* Table */}
      <table className="table table-striped table-hover my-5 shadow" style={{ overflow: 'hidden', borderRadius: '40px' }}>
        <thead>
          <tr>
            <th scope="col" className="text-white bg-danger">Sr no.</th>
            <th scope="col" className="text-white bg-danger">Blood Bank Name</th>
            <th scope="col" className="text-white bg-danger">Phone no.</th>
            <th scope="col" className="text-white bg-danger">More Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Grant Medical Foundation</td>
            <td>1234567891</td>
            <td>
              <button onClick={toggleModal} className="btn btn-link" type="button">
                Click for more info
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Grant Medical Foundation</td>
            <td>1234567891</td>
            <td>
              <button onClick={toggleModal} className="btn btn-link" type="button">
                Click for more info
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Grant Medical Foundation</td>
            <td>1234567891</td>
            <td>
              <button onClick={toggleModal} className="btn btn-link" type="button">
                Click for more info
              </button>
            </td>
          </tr> 
          <tr>
            <th scope="row">4</th>
            <td>Grant Medical Foundation</td>
            <td>1234567891</td>
            <td>
              <button onClick={toggleModal} className="btn btn-link" type="button">
                Click for more info
              </button>
            </td>
          </tr>
          {/* Add more table rows as needed */}
        </tbody>
      </table>

      {/* Modal */}
      <div className={`modal fade ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">More Details</h1>
              <button type="button" className="btn-close" onClick={toggleModal} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <table className="table table-bordered border-danger">
                <tbody>
                  <tr>
                    <th scope="row">BB Name</th>
                    <td>Grant Medical Foundation</td>
                  </tr>
                  <tr>
                    <th scope="row">District</th>
                    <td>Mumbai City</td>
                  </tr>
                  <tr>
                    <th scope="row">City</th>
                    <td>Malad</td>
                  </tr>
                  <tr>
                    <th scope="row">Address</th>
                    <td>Indian Medical Charitable Trust, Main Road Gandhi chowk Bhandara 441904</td>
                  </tr>
                  <tr>
                    <th scope="row">Pincode</th>
                    <td>441904</td>
                  </tr>
                  <tr>
                    <th scope="row">Phone no.</th>
                    <td>12345678</td>
                  </tr>
                  {/* Add more details as needed */}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={toggleModal}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableWithModal;
