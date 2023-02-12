package employeelist.com.employeelist.Employees;

import org.springframework.web.bind.annotation.RequestMapping; 

import java.util.List;
import java.util.NoSuchElementException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/employees")
@CrossOrigin(origins = "http://localhost:5173")
public class EmployeeController {
	
	// Initializing logger to log information when methods are used:
    Logger logger = LoggerFactory.getLogger(EmployeeController.class);
	
    @Autowired
    private EmployeeService employeeService;

    @GetMapping
    public ResponseEntity<List<EmployeeDTO>> getAllEmployees() {
        try {
	        List<EmployeeDTO> employees = employeeService.getAllEmployees();
		    logger.info("Retrieved all employees successfully");
		    return new ResponseEntity<>(employees, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            logger.error("Employee not found: ", e);
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            logger.error("Error while retrieving employees: ", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<EmployeeDTO> getEmployeeById(@PathVariable Long id) {
        try {
            EmployeeDTO employee = employeeService.getEmployeeById(id);
            logger.info("Retrieved employee successfully with id of: " + id);
            return new ResponseEntity<>(employee, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            logger.error("Employee with id " + id + " not found");
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            logger.error("An error occurred while retrieving employee with id of " + id, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping
    public ResponseEntity<EmployeeDTO> addEmployee( @RequestBody EmployeeDTO employeeDTO) {
    	try {
            EmployeeDTO savedEmployee = employeeService.addEmployee(employeeDTO);
            logger.info("Created a new employee");
            return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
        } catch (Exception e) {
            logger.error("Error while creating a new employee", e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<EmployeeDTO> updateEmployee(@PathVariable Long id, @RequestBody EmployeeDTO employeeDTO) {
        try {
            EmployeeDTO updatedEmployee = employeeService.updateEmployee(id, employeeDTO);
            logger.info("Updated employee successfully with id of: " + id);
            return new ResponseEntity<>(updatedEmployee, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            logger.error("Employee with id " + id + " not found");
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            logger.error("An error occurred while updating employee with id of " + id, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEmployee(@PathVariable Long id) {
        try {
            employeeService.deleteEmployee(id);
            logger.info("Deleted employee successfully with id of: " + id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (NoSuchElementException e) {
            logger.error("Error deleting employee with id of: " + id, e);
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
