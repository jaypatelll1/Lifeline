import React, { useState } from "react";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function GetDonorInfoForm() {
  const [formData, setFormData] = useState({
    name: "",
    bloodGroup: "",
    email: "",
    phone: "",
    address: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make POST request using Axios
      const response = await axios.post(
        BASE_URL + "/form/submit",
        formData
      );
      console.log(response.data); // Log the response from the server
      setSuccessMessage("Data saved successfully");
      setErrorMessage("");

      // Clear the form fields
      setFormData({
        name: "",
        bloodGroup: "",
        email: "",
        phone: "",
        address: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Error saving data");
      setSuccessMessage("");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div
      className="container card p-0 shadow my-5"
      style={{ borderRadius: "30px", overflow: "hidden" }}
    >
      <h5
        className="card-header text-center py-4 fw-bold"
        style={{ fontSize: "26px", color: "white", background: "var(--red)" }}
      >
        {" "}
        Fill Your Details to Donate Blood
      </h5>
      <div className="card-body my-4 mx-3">
        <form className="py-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputname" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="exampleInputname"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputBloodGroup" className="form-label">
              Select your Blood Group
            </label>
            <select
              name="bloodGroup"
              className="form-select mb-3 fw-lighter"
              aria-label="Blood Group"
              value={formData.bloodGroup}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail" className="form-label">
              Email id
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPhone" className="form-label">
              Phone no.
            </label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              id="exampleInputPhone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputAddress" className="form-label">
              Address
            </label>
            <textarea
              name="address"
              className="form-control"
              id="exampleInputAddress"
              placeholder="Enter your address"
              rows="4"
              value={formData.address}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-danger rounded-pill py-2 px-3 mt-4"
          >
            Submit
          </button>
          {successMessage && (
            <div className="alert alert-success my-3">{successMessage}</div>
          )}
          {errorMessage && (
            <div className="alert alert-danger my-3">{errorMessage}</div>
          )}
        </form>
      </div>
    </div>
  );
}
