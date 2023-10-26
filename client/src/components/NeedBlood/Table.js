import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Table = () => {
  const [bloodDonors, setBloodDonors] = useState([]);
  const { cityId } = useParams(); // Access the cityId route parameter

  useEffect(() => {
    // Define the API URL based on the presence of cityId in the URL
    const apiUrl = cityId
      ? `http://localhost:9000/donors/check/${cityId}`
      : 'http://localhost:9000/donors/check';

    axios.get(apiUrl).then((response) => {
      setBloodDonors(response.data.bloodDonors);
    });
  }, [cityId]);



  return (
    <div className='container'>
      <table className="table table-striped table-hover mb-5 shadow" style={{ overflow: 'hidden', borderRadius: '40px' }}>
        <thead>
          <tr>
            <th scope="col" className="text-white bg-danger">Sr no.</th>
            <th scope="col" className="text-white bg-danger">Name</th>
            <th scope="col" className="text-white bg-danger">Blood Group</th>
            <th scope="col" className="text-white bg-danger">Location</th>
            <th scope="col" className="text-white bg-danger">Contact</th>
          </tr>
        </thead>
        <tbody>
          {bloodDonors.map((bloodDonor, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{bloodDonor.Name}</td>
             <td>{bloodDonor["Blood Group"]}</td>
              <td>{bloodDonor.Location}</td>
              <td><i class="fas fa-phone-alt"></i> {bloodDonor.Contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
