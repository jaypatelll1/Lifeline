import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Import the skeleton styles

const Table = () => {
  const [bloodDonors, setBloodDonors] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const { cityId } = useParams(); // Access the cityId route parameter
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [donorsPerPage] = useState(10); // Number of donors per page

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before starting data fetch
      try {
        const apiUrl = cityId
          ? `http://localhost:9000/donors/check/${cityId}?page=${currentPage}&limit=${donorsPerPage}`
          : `http://localhost:9000/donors/check?page=${currentPage}&limit=${donorsPerPage}`;

        const response = await axios.get(apiUrl);
        setBloodDonors(response.data.bloodDonors);
        setTotalPages(response.data.pagination.totalPages); // Set total pages from response
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchData();
  }, [cityId, currentPage, donorsPerPage]);

  // Reset currentPage to 1 when cityId changes
  useEffect(() => {
    setCurrentPage(1);
  }, [cityId]);

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className='container my-4'>
      <div className='table-responsive'>
        <table className="table table-striped table-hover mb-5 shadow" style={{ overflow: 'hidden', borderRadius: '40px' }}>
          <thead>
            <tr>
              <th scope="col" className="text-white bg-danger">Sr no.</th>
              <th scope="col" className="text-white bg-danger">Name</th>
              <th scope="col" className="text-white bg-danger">Blood Group</th>
              <th scope="col" className="text-white bg-danger">Location</th>
              <th scope="col" className="text-white bg-danger">Contact</th>
              <th scope="col" className="text-white bg-danger">Gender</th>
              <th scope="col" className="text-white bg-danger">Age</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              [...Array(donorsPerPage)].map((_, index) => (
                <tr key={index}>
                  <th scope="row"><Skeleton width={20} /></th>
                  <td><Skeleton /></td>
                  <td><Skeleton width={50} /></td>
                  <td><Skeleton /></td>
                  <td><Skeleton width={100} /></td>
                  <td><Skeleton width={50} /></td>
                  <td><Skeleton width={30} /></td>
                </tr>
              ))
            ) : (
              bloodDonors.map((bloodDonor, index) => (
                <tr key={bloodDonor._id}>
                  <th scope="row">{(currentPage - 1) * donorsPerPage + index + 1}</th>
                  <td>{bloodDonor.Name}</td>
                  <td>{bloodDonor["Blood Group"]}</td>
                  <td>{bloodDonor.Location}</td>
                  <td><i className="fas fa-phone-alt"></i> {bloodDonor.Contact}</td>
                  <td>{bloodDonor.Gender}</td>
                  <td>{bloodDonor.Age}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

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
    </div>
  );
};

export default Table;
