import React, { useState } from 'react'
import employeeData from '../../hooks/employeeData';
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import styles from "./EmployeeList.module.scss";
import { Link } from 'react-router-dom';
import axios from 'axios';

const EmployeeList = () => {
    const { isLoading, isError, data } = employeeData();

    

  return (
    <div className={styles.EmployeeList}>
        <div className={styles.EmployeeList__Header}>
            <h3 className={styles.EmployeeList__Header__Title}>Employee List</h3>
        </div>
        <div className={styles.EmployeeList__Content}>
            <div className={styles.EmployeeList__Content__AddEmployee}>
                <p className={styles.EmployeeList__Content__AddEmployee__Info}>Please click on 'Edit' to find more details of each employee.</p>
                <Link to="/new">
                    <button className={styles.EmployeeList__Content__AddEmployee__Btn}>Add Employee</button>
                </Link>
            </div>
            {isLoading && (
                <div>
                    <h3>Loading...</h3>
                </div>
            )}
            {isError && (
                <div>
                    <h3>Error loading the data.</h3>
                </div>
            )}
            <div>
                {data && data.length > 0 && data.map((employee: any, i: React.Key | null | undefined) => <EmployeeCard key={i} employee={employee} />)}
            </div>
        </div>

    </div>
  )
}

export default EmployeeList