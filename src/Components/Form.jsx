// Form.js
import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  // State to maintain form data

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    country: "",
    birthDate: "",
    imageURL: "",
    marriageStatus: false,
    gender: "",
  });

  // State to control form submission
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <h1>React Form Assignment</h1>
      <div className="form-container">
        <div className="form-box">
          <form onSubmit={handleSubmit}>
            <div className="name-inputs">
              <div>
                <label htmlFor="firstName">First Name</label>
                <br />
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <br />
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>

            <div className="name-inputs2">
              <div>
                <label htmlFor="phNumber">Phone Number</label>
                <br />
                <input
                  type="number"
                  id="phNumber"
                  name="phNumber"
                  placeholder="Enter Phone Number"
                  value={formData.phNumber}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="country">Country</label>
                <br />
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                >
                  <option value="">Select a Country</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  {/* Add other country options here */}
                </select>
              </div>
            </div>

            <div className="name-inputs3">
              <div>
                <label htmlFor="birthDate">Birth Date</label>
                <br />
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="avatar">Choose Avatar</label>
                <br />
                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  accept="image/*"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="name-inputs">
              <div>
                <label htmlFor="marriageStatus">Select if Married</label>

                <label>
                  <input
                    type="checkbox"
                    name="marriageStatus"
                    checked={formData.marriageStatus}
                    onChange={handleInputChange}
                  />
                  Marriage Status
                </label>
              </div>
            </div>

            <div className="name-inputs">
              <div>
                <label htmlFor="gender">Choose gender...</label>

                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleInputChange}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleInputChange}
                  />
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={formData.gender === "other"}
                    onChange={handleInputChange}
                  />
                  Other
                </label>
              </div>
            </div>

            <div className="submit-button">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        {isSubmitted && (
          <div className="form-data-box">
            <h2>Form Data:</h2>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
          </div>
        )}
      </div>
    </>
  );
};

export default Form;
