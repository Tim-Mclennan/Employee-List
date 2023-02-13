import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./AddEmployee.module.scss";

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    mobile: "",
    residentialAddress: "",
    contractType: "",
    startDate: "",
    endDate: "",
    timeBasis: "",
    hoursPerWeek: "",
  });

  const [errors, setErrors] = useState('');

  const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    setFormData({...formData, [event.target.name]: event.target.value, });
  };

  const handleFormSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    axios
      .post("/employees", formData)
      .then((response) => {
        console.log(response);
        setFormData({
          firstName: "",
          middleName: "",
          lastName: "",
          email: "",
          mobile: "",
          residentialAddress: "",
          contractType: "",
          startDate: "",
          endDate: "",
          timeBasis: "",
          hoursPerWeek: "",
        });
        window.location.href = "/";
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          setErrors("Bad Request: Check if all the required fields are filled correctly.");
        } else if (error.response.status === 401) {
          setErrors("Unauthorized: You need to be logged in to perform this action.");
        } else if (error.response.status === 403) {
          setErrors("Forbidden: You do not have the necessary permissions to perform this action.");
        } else if (error.response.status === 404) {
          setErrors( "Not Found: The requested resource could not be found on the server.");
        } else if (error.response.status === 500) {
          setErrors("Server Error: There was a problem with the server, please try again later.");
        } else {
          setErrors("An error occurred, please try again later.");
        }  
      });
  };

  return (
    <div className={styles.AddEmployee}>
        <div className={styles.AddEmployee__Header}>
            <Link to="/">
                <button className={styles.AddEmployee__Header__Back}>{"< Back"}</button>
            </Link>
            <h3 className={styles.AddEmployee__Header__Title}>New Employee Details</h3>
        </div>   
        <br></br>
        <form  className={styles.AddEmployee__Form} onSubmit={handleFormSubmit}>
            <h4>Personal Information</h4>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" name="firstName" id="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} required/>

            <label htmlFor="middleName">Middle Name: (if applicable)</label>
            <input type="text" name="middleName" id="middleName" placeholder="Middle Name" value={formData.middleName} onChange={handleInputChange}/>

            <label htmlFor="lastName">Last Name:</label>
            <input type="text" name="lastName" id="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} required/>
            <br></br>
            <h4>Contact Details</h4>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required/>

            <label htmlFor="mobile">Mobile Number:</label>
            <p><span id={styles.numberNote} >Must be an Australian number with 10 digits</span></p>
            <input type="tel" name="mobile" id="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleInputChange} required max="10" min="10"/>

            <label htmlFor="residentialAddress">Residential Address:</label>
            <input type="text" name="residentialAddress" id="residentialAddress" placeholder="Residential Address" value={formData.residentialAddress} onChange={handleInputChange}/>
            <br></br>
            <h4>Employee Status</h4>
            <p>What is your contract type?</p>
            <div className={styles.AddEmployee__Form__Contract}>
                <div>
                    <input type="radio" id="permanent" name="contractType" value="Permanent" checked={formData.contractType === "Permanent"} onChange={handleInputChange} required/>
                    <label htmlFor="permanent">Permanent</label>
                </div>
                <div>
                    <input type="radio" id="contract" name="contractType" value="Contract" checked={formData.contractType === "Contract"} onChange={handleInputChange} required/>
                    <label htmlFor="contract">Contract</label>
                </div>
            </div>
            <br></br>
            <label htmlFor="startDate">Start Date:</label>
            <input type="date" name="startDate" id="startDate" placeholder="Start Date" value={formData.startDate} onChange={handleInputChange} required/>

            <label htmlFor="endDate">End Date:</label>
            <input type="date" name="endDate" id="endDate" placeholder="End Date" value={formData.endDate} onChange={handleInputChange} required/>
            <p>Is this on a part-time or full-time basis?</p>
            <div className={styles.AddEmployee__Form__timeBasis}>
                <div>
                    <input type="radio" id="part-time" name="timeBasis" value="Part-time" checked={formData.timeBasis === "Part-time"} onChange={handleInputChange} required/>
                    <label htmlFor="part-time">Part-time</label>
                </div>
                <div>
                    <input type="radio" id="full-time" name="timeBasis" value="Full-time" checked={formData.timeBasis === "Full-time"} onChange={handleInputChange} required/>
                    <label htmlFor="full-time">Full-time</label>
                </div>
            </div>
            <br></br>
            <label htmlFor="hoursPerWeek">Hours Per Week:</label>
            <input type="number" name="hoursPerWeek" id="hoursPerWeek" placeholder="Hours Per Week" value={formData.hoursPerWeek} onChange={handleInputChange} required/>
            <div>
                <button className={styles.AddEmployee__Form__SaveBtn} type="submit">Save</button>
                <Link to="/">
                    <button  className={styles.AddEmployee__Form__CancelBtn} >Cancel</button>
                </Link>    
            </div>
        </form> 
        <div>
          {errors ? <div className={styles.AddEmployee__Error}>{errors}</div> : null}
        </div>
    </div>
  )
}

export default AddEmployee