import { useEffect, useState } from 'react'
import styles from "./EmployeeDetails.module.scss";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const EmployeeDetails = () => {
    const { id } = useParams();

    const [formData, setFormData] = useState({
        id: '',
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        mobile: '',
        residentialAddress: '',
        contractType: '',
        startDate: '',
        endDate: '',
        timeBasis: '',
        hoursPerWeek: ''
      });

    //prefills existing employee information
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/employees/${id}`);
      setFormData(result.data);
    };
    fetchData();
  }, [id]);
    
    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value
    });
    };
    
    const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const { 
        firstName,
        middleName,
        lastName,
        email,
        mobile,
        residentialAddress,
        contractType,
        startDate,
        endDate,
        timeBasis,
        hoursPerWeek
    } = formData;
    axios
        .put(`/employees/${id}`, {
        id,
        firstName,
        middleName,
        lastName,
        email,
        mobile,
        residentialAddress,
        contractType,
        startDate,
        endDate,
        timeBasis,
        hoursPerWeek
        })
        .then(res => {
        console.log(res);
        })
        .catch(error => {
        console.error(error);
        })
        .then(() => {
            window.location.href = '/';
        });
    };

  return (
    <div className={styles.EmployeeDetails}>
        <div className={styles.EmployeeDetails__Header}>
            <Link to="/">
                <button className={styles.EmployeeDetails__Header__Back}>{"< Back"}</button>
            </Link>
            <h3 className={styles.EmployeeDetails__Header__Title}>Employee Details</h3>
        </div>   
        <br></br>
        <form  className={styles.EmployeeDetails__Form} onSubmit={handleSubmit}>
            <h4>Personal Information</h4>
            <label htmlFor="firstName">First Name:</label>
            <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            />

            <label htmlFor="middleName">Middle Name: (if applicable)</label>
            <input
            type="text"
            name="middleName"
            id="middleName"
            placeholder="Middle Name"
            value={formData.middleName}
            onChange={handleInputChange}
            required
            />

            <label htmlFor="lastName">Last Name:</label>
            <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            />
            <br></br>
            <h4>Contact Details</h4>
            <label htmlFor="email">Email:</label>
            <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            />

            <label htmlFor="mobile">Mobile Number:</label>
            <p><span id={styles.numberNote} >Must be an Australian number</span></p>
            <input
            type="tel"
            name="mobile"
            id="mobile"
            placeholder="Mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            />

            <label htmlFor="residentialAddress">Residential Address:</label>
            <input
            type="text"
            name="residentialAddress"
            id="residentialAddress"
            placeholder="Residential Address"
            value={formData.residentialAddress}
            onChange={handleInputChange}
            />
            <br></br>
            <h4>Employee Status</h4>
            <p>What is your contract type?</p>
            <div className={styles.EmployeeDetails__Form__Contract}>
                <div>
                    <input
                    type="radio"
                    id="permanent"
                    name="contractType"
                    value="Permanent"
                    checked={formData.contractType === "Permanent"}
                    onChange={handleInputChange}
                    required
                    />
                    <label htmlFor="permanent">Permanent</label>
                </div>
                <div>
                    <input
                    type="radio"
                    id="contract"
                    name="contractType"
                    value="Contract"
                    checked={formData.contractType === "Contract"}
                    onChange={handleInputChange}
                    required
                    />
                    <label htmlFor="contract">Contract</label>
                </div>
            </div>
            <br></br>
            <label htmlFor="startDate">Start Date:</label>
            <input
            type="date"
            name="startDate"
            id="startDate"
            placeholder="Start Date"
            value={formData.startDate}
            onChange={handleInputChange}
            />

            <label htmlFor="endDate">End Date:</label>
            <input
            type="date"
            name="endDate"
            id="endDate"
            placeholder="End Date"
            value={formData.endDate}
            onChange={handleInputChange}
            />
            <p>Is this on a part-time or full-time basis?</p>
            <div className={styles.EmployeeDetails__Form__timeBasis}>
                <div>
                    <input
                    type="radio"
                    id="part-time"
                    name="timeBasis"
                    value="Part-time"
                    checked={formData.timeBasis === "Part-time"}
                    onChange={handleInputChange}
                    required
                    />
                    <label htmlFor="part-time">Part-time</label>
                </div>
                <div>
                    <input
                    type="radio"
                    id="full-time"
                    name="timeBasis"
                    value="Full-time"
                    checked={formData.timeBasis === "Full-time"}
                    onChange={handleInputChange}
                    required
                    />
                    <label htmlFor="full-time">Full-time</label>
                </div>
            </div>
            <br></br>
            <label htmlFor="hoursPerWeek">Hours Per Week:</label>
            <input
            type="number"
            name="hoursPerWeek"
            id="hoursPerWeek"
            placeholder="Hours Per Week"
            value={formData.hoursPerWeek}
            onChange={handleInputChange}
            />
            <div>
                <button className={styles.EmployeeDetails__Form__SaveBtn} type="submit">Save</button>
                <Link to="/">
                    <button  className={styles.EmployeeDetails__Form__CancelBtn} >Cancel</button>
                </Link>    
            </div>
        </form> 
    </div>
  )
};

export default EmployeeDetails