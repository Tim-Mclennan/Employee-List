import { Link } from "react-router-dom";
import styles from "./EmployeeCard.module.scss";
import axios from 'axios';
import { useState } from "react";

// Created an interface as I need to specify the type of the employee parameter that is being passed into the component. 
// Passing the prop without an interface causes an error: "the employee prop that is being passed into it is Binding element 'employee' implicitly has an 'any' type.ts(7031)".
interface Employee {
    id: number;
    firstName: string;
    middleName?: string;
    lastName: string;
    email: string;
    mobile: string;
    residentialAddress: string;
    contractType: string;
    startDate: string;
    endDate?: string;
    timeBasis: string;
    hoursPerWeek: number;
  }

  const EmployeeCard = ({ employee }: { employee: Employee }) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [deleteError, setDeleteError] = useState<null>(null);

    const handleDelete = async () => {
      setIsDeleting(true);
      setDeleteError(null);
  
      try {
        await axios.delete(`/employees/${employee.id}`);
      } catch (error) {
        setDeleteError(error as null);
      } finally {
        setIsDeleting(false);
        window.location.reload();
      }
    };

  return (
    <div className={styles.EmployeeCard}>
        <div className={styles.EmployeeCard__Content}>
            <p className={styles.EmployeeCard__Content__Header}>{employee && employee.firstName} {employee && employee.lastName}</p>
            <p className={styles.EmployeeCard__Content__Contract}>{employee && employee.contractType}: 
            <br></br>
            {employee && employee.startDate} - {employee && employee.endDate}</p>
            <p className={styles.EmployeeCard__Content__Email}>{employee && employee.email} </p>
        </div>
        <div className={styles.EmployeeCard__Btns}>
            <Link to={`/details/${employee.id}`}>
                <button className={styles.EmployeeCard__Btns__Edit}>Edit</button>
            </Link>
            <div className={styles.EmployeeCard__Btns__Border}></div>
            <button className={styles.EmployeeCard__Btns__Remove} onClick={handleDelete} >Remove</button>
        </div>
    </div>
  )
}

export default EmployeeCard