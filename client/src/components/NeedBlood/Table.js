import React from 'react';

const Table = () => {
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
        <tr>
          <th scope="row">1</th>
          <td>Faiz Ansari</td>
          <td>B+</td>
          <td>Mumbai, Malad West</td>
          <td><i class="fas fa-phone-alt"></i> 1234567891</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>John Doe</td>
          <td>A-</td>
          <td>Mumbai, Andheri</td>
          <td><i class="fas fa-phone-alt"></i> 9876543210</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Jane Smith</td>
          <td>O+</td>
          <td>Mumbai, Borivali</td>
          <td><i class="fas fa-phone-alt"></i> 5551234567</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Alice Johnson</td>
          <td>AB+</td>
          <td>Mumbai, Malad East</td>
          <td><i class="fas fa-phone-alt"></i> 7890123456</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Bob Smith</td>
          <td>B-</td>
          <td>Mumbai, Thane</td>
          <td><i class="fas fa-phone-alt"></i> 1112223333</td>
        </tr>
      </tbody>
    </table>
    </div>  
  );
};

export default Table;
