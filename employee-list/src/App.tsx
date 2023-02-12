import styles from "./App.module.scss";
import EmployeeDetails from './components/EmployeeDetails/EmployeeDetails';
import EmployeeList from './components/EmployeeList/EmployeeList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddEmployee from './components/AddEmployee/AddEmployee';


function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeList />}/>
          <Route path="/new" element={<AddEmployee />}/>
          <Route path="/details/:id" element={<EmployeeDetails />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
