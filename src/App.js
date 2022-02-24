import React, { useState } from "react";
import { QRCode } from "react-qr-svg";

const ControlledInputs = () => {
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [click, setClick] = useState(false);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      person.firstName &&
      person.email &&
      person.age &&
      person.number &&
      person.sex &&
      person.bloodGroup
    ) {
      setClick(true);
    }
  };

  return (
    <>
      <article className="form">
        <h2>Enter Patient Details</h2>
        <form>
          <div className="form-control">
            <label htmlFor="firstName">Patient Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email ID</label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="bloodGroup">Blood Group</label>
            <input
              type="text"
              id="bloodGroup"
              name="bloodGroup"
              value={person.bloodGroup}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="number">Contact No.</label>
            <input
              type="number"
              id="number"
              name="number"
              value={person.number}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="sex">Sex</label>
            <label>
              <input
                type="radio"
                id="sex"
                name="sex"
                value="Male"
                onChange={handleChange}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                id="sex"
                name="sex"
                value="Female"
                onChange={handleChange}
              />{" "}
              Female
            </label>
            <label>
              <input
                type="radio"
                id="sex"
                name="sex"
                value="Other"
                onChange={handleChange}
              />{" "}
              Other
            </label>
          </div>
          <button type="submit" className="btn" onClick={handleSubmit}>
            Generate QR Code
          </button>
        </form>
      </article>
      <article className="form" style={{ textAlign: "center" }}>
        <h4 style={{ textAlign: "center" }}>QR Code</h4>
        {click ? (
          <QRCode
            value={`XYZ Hospital\n_____________________\nPatient Name:${person.firstName} \nPatient Sex:${person.sex} \nPatient Age:${person.age} \nPatient Blood Group:${person.bloodGroup} \nPatient Email:${person.email} \nContact Number:${person.number}`}
          />
        ) : null}
      </article>
    </>
  );
};

export default ControlledInputs;
