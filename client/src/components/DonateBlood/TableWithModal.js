import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const BASE_URL = process.env.REACT_APP_BASE_URL;

const TableWithModal = () => {
  const [bloodBanks, setBloodBanks] = useState([]);
  const [selectedBloodBank, setSelectedBloodBank] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [banksPerPage] = useState(10);
  const { cityId } = useParams();

  console.log(BASE_URL)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const apiUrl = cityId
          ? `${BASE_URL}/bloodbanks/op/${cityId}?page=${currentPage}&limit=${banksPerPage}`
          : `${BASE_URL}/bloodbanks/op?page=${currentPage}&limit=${banksPerPage}`;

        const response = await axios.get(apiUrl);
        setBloodBanks(response.data.bloodBanks);
        setTotalPages(response.data.pagination.totalPages);
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [cityId, currentPage, banksPerPage]);

  useEffect(() => {
    // Reset to page 1 when cityId changes
    setCurrentPage(1);
  }, [cityId]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleRowClick = (bloodBank) => {
    setSelectedBloodBank(bloodBank);
    setShowModal(true);
    document.body.classList.add('modal-open');
  };

  const toggleModal = () => {
    setShowModal(false);
    document.body.classList.remove('modal-open');
  };

  return (
    <div className="container mb-5">
      <table
        className="table table-striped table-hover my-5 shadow"
        style={{ overflow: 'hidden', borderRadius: '40px' }}
      >
        <thead>
          <tr>
            <th scope="col" className="text-white bg-danger" style={{ width: '120px' }}>
              Sr no.
            </th>
            <th scope="col" className="text-white bg-danger">
              Blood Bank Name
            </th>
            <th scope="col" className="text-white bg-danger">
              Phone no.
            </th>
            <th scope="col" className="text-white bg-danger" style={{ width: '230px' }}>
              More Detail
            </th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            [...Array(banksPerPage)].map((_, index) => (
              <tr key={index}>
                <td><Skeleton height={30} /></td>
                <td><Skeleton height={30} /></td>
                <td><Skeleton height={30} /></td>
                <td><Skeleton height={30} /></td>
              </tr>
            ))
          ) : (
            bloodBanks.map((bloodBank, index) => (
              <tr key={index} onClick={() => handleRowClick(bloodBank)}>
                <th scope="row">{(currentPage - 1) * banksPerPage + index + 1}</th>
                <td>{bloodBank.name}</td>
                <td>{bloodBank.phone}</td>
                <td>
                  <button className="btn btn-link" type="button">
                    Click for more info
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {!loading && (
        <div className="d-flex justify-content-between mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1 || loading}
            className="btn btn-danger"
          >
            Previous
          </button>
          <span className="align-self-center">Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages || loading}
            className="btn btn-danger"
          >
            Next
          </button>
        </div>
      )}

      {/* Blur overlay */}
      {showModal && <div className="modal-overlay show" />}

      {/* Modal */}
      {selectedBloodBank && (
        <div
          className={`modal fade ${showModal ? 'show' : ''}`}
          tabIndex="-1"
          role="dialog"
          style={{ display: showModal ? 'block' : 'none' }}
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
