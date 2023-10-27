import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const TableWithModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBloodBank, setSelectedBloodBank] = useState(null); // State to track the selected blood bank

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const { cityId } = useParams(); // Access the cityId route parameter

  const [bloodBanks, setBloodBanks] = useState([]); // Fixed typo here

  useEffect(() => {
    // Define the API URL based on the presence of cityId in the URL
    const apiUrl = cityId
      ? `http://localhost:9000/bloodbanks/op/${cityId}`
      : "http://localhost:9000/bloodbanks/op";

    axios.get(apiUrl).then((response) => {
      setBloodBanks(response.data.bloodBanks); // Fixed typo here
    });
  }, [cityId]);

  // Function to handle when a row is clicked
  const handleRowClick = (bloodBank) => {
    setSelectedBloodBank(bloodBank);
    toggleModal();
  };

  return (
    <div className="container mb-5">
      {/* Table */}
      <table
        className="table table-striped table-hover my-5 shadow"
        style={{ overflow: "hidden", borderRadius: "40px" }}
      >
        <thead>
          <tr>
            <th scope="col" className="text-white bg-danger" style={{width:"120px"}}>
              Sr no.
            </th>
            <th scope="col" className="text-white bg-danger">
              Blood Bank Name
            </th>
            <th scope="col" className="text-white bg-danger">
              Phone no.
            </th>
            <th scope="col" className="text-white bg-danger" style={{width:"230px"}}>
              More Detail
            </th>
          </tr>
        </thead>
        <tbody>
          {bloodBanks.map((bloodBank, index) => (
            <tr key={index} onClick={() => handleRowClick(bloodBank)}>
              <th scope="row">{index + 1}</th>
              <td>{bloodBank.name}</td>
              <td>{bloodBank.phone}</td>
              <td>
                <button className="btn btn-link" type="button">
                  Click for more info
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {selectedBloodBank && (
        <div
          className={`modal fade ${showModal ? "show" : ""}`}
          tabIndex="-1"
          role="dialog"
          style={{ display: showModal ? "block" : "none" }}
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5 fw-bold">More Details About Blood Bank</h1>
                <button
                  type="button"
                  className="btn-close"
                  onClick={toggleModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <table className="table table-bordered border-danger shadow">
                  <tbody>
                    <tr>
                      <th scope="row">BB Name</th>
                      <td>{selectedBloodBank.name}</td>
                    </tr>
                    <tr>
                      <th scope="row">Phone no.</th>
                      <td>{selectedBloodBank.phone}</td>
                    </tr>
                    <tr>
                      <th scope="row">City</th>
                      <td>{selectedBloodBank.city}</td>
                    </tr>
                    <tr>
                      <th scope="row">Address</th>
                      <td>{selectedBloodBank.address}</td>
                    </tr>
                    <tr>
                      <th scope="row">Pincode</th>
                      <td>{selectedBloodBank.pincode}</td>
                    </tr>
                    {/* Add more details as needed */}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={toggleModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableWithModal;
