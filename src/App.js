import React, { useState } from "react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import { QRCode } from "react-qr-svg";

const ControlledInputs = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
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
      person.bloodGroup &&
      person.doctorName
    ) {
      setClick(true);
    }
  };

  return (
    <>
      <article className="form">
        <div className="header">
          <img
            src="https://ik.imagekit.io/anurag/logo_Y3fTs2tA5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645768568352"
            alt="logo"
            srcset=""
          />
          <h2 className="headerh2">XYZ HOSPITAL, Mohali</h2>
        </div>

        <form>
          <div className="form-control">
            <label htmlFor="doctorName">Doctor Name</label>
            <input
              type="text"
              id="doctorName"
              name="doctorName"
              value={person.doctorName}
              onChange={handleChange}
            />
          </div>
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
          <div className="form-control radio">
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
          <div className="generate">
            <button type="submit" className="btn" onClick={handleSubmit}>
              <img
                className="qrLogo"
                src="https://ik.imagekit.io/anurag/6498744_smartphone_mobile_qr_ui_code_icon_xm2zu9HYp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645769057793"
                alt="qr"
                srcset=""
              />{" "}
              Generate QR Code
            </button>
          </div>
        </form>
      </article>
      <article style={{ textAlign: "center" }} className="form">
        <button onClick={handlePrint} className="btn">
          Print this out!
        </button>
      </article>
      <article
        className="form"
        style={{ textAlign: "center" }}
        ref={componentRef}
      >
        <h4 style={{ textAlign: "center" }}>QR Code</h4>

        {click ? (
          <QRCode
            value={`XYZ Hospital\n_____________________\nDoctor Name:Dr.${person.doctorName} \nPatient Name:${person.firstName} \nPatient Sex:${person.sex} \nPatient Age:${person.age} \nPatient Blood Group:${person.bloodGroup} \nPatient Email:${person.email} \nContact Number:${person.number}`}
          />
        ) : null}
      </article>
    </>
  );
};

export default ControlledInputs;
