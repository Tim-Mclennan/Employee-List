import axios from "axios";
import { useQuery } from "react-query";

export default function employeeData() {
    return useQuery('allEmployeeData', () => axios.get('/employees').then(res => res.data));
}