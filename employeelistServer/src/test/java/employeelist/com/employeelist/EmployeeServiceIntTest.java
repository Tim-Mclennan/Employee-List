package employeelist.com.employeelist;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import employeelist.com.employeelist.Employees.EmployeeDTO;
import employeelist.com.employeelist.Employees.EmployeeService;

@RunWith(SpringRunner.class)
@DataJpaTest
public class EmployeeServiceIntTest {
    @Autowired
    private EmployeeService employeeService;

    private EmployeeDTO employeeDTO1;
    private EmployeeDTO employeeDTO2;

    @Before
    public void setUp() {
        employeeDTO1 = new EmployeeDTO();
        employeeDTO1.setFirstName("John");
        employeeDTO1.setMiddleName("M");
        employeeDTO1.setLastName("Doe");
        employeeDTO1.setEmail("john.doe@example.com");
        employeeDTO1.setMobile(1234567890L);
        employeeDTO1.setResidentialAddress("1 Main St");
        employeeDTO1.setContractType("Full-time");
        employeeDTO1.setStartDate("2022-01-01");
        employeeDTO1.setEndDate("2023-01-01");
        employeeDTO1.setTimeBasis("40 hours/week");
        employeeDTO1.setHoursPerWeek("40");

        employeeDTO2 = new EmployeeDTO();
        employeeDTO2.setFirstName("Jane");
        employeeDTO2.setMiddleName("J");
        employeeDTO2.setLastName("Doe");
        employeeDTO2.setEmail("jane.doe@example.com");
        employeeDTO2.setMobile(2345678901L);
        employeeDTO2.setResidentialAddress("2 Main St");
        employeeDTO2.setContractType("Part-time");
        employeeDTO2.setStartDate("2022-02-01");
        employeeDTO2.setEndDate("2023-02-01");
        employeeDTO2.setTimeBasis("20 hours/week");
        employeeDTO2.setHoursPerWeek("20");
    }

    @Test
    public void testGetAllEmployees() {
        EmployeeDTO savedEmployeeDTO1 = employeeService.addEmployee(employeeDTO1);
        EmployeeDTO savedEmployeeDTO2 = employeeService.addEmployee(employeeDTO2);
        List<EmployeeDTO> employeeDTOs = employeeService.getAllEmployees();
        assertThat(employeeDTOs).hasSize(2);
        assertThat(employeeDTOs).contains(savedEmployeeDTO1, savedEmployeeDTO2);
    }

	@SuppressWarnings("deprecation")
	@Test
    public void testGetEmployeeById() {
    EmployeeDTO savedEmployeeDTO1 = employeeService.addEmployee(employeeDTO1);
    EmployeeDTO foundEmployeeDTO = employeeService.getEmployeeById(savedEmployeeDTO1.getId());
    assertThat(foundEmployeeDTO).isEqualToComparingFieldByField(savedEmployeeDTO1);
	}
	
	@Test
	public void testUpdateEmployee() {
	    EmployeeDTO savedEmployeeDTO1 = employeeService.addEmployee(employeeDTO1);
	    savedEmployeeDTO1.setFirstName("Jane");	
	    EmployeeDTO updatedEmployeeDTO = employeeService.updateEmployee(null, savedEmployeeDTO1);
	    assertThat(updatedEmployeeDTO.getFirstName()).isEqualTo("Jane");
	}
	
	@Test
	public void testDeleteEmployee() {
	    EmployeeDTO savedEmployeeDTO1 = employeeService.addEmployee(employeeDTO1);
	    employeeService.deleteEmployee(savedEmployeeDTO1.getId());	
	    EmployeeDTO foundEmployeeDTO = employeeService.getEmployeeById(savedEmployeeDTO1.getId());
	    assertThat(foundEmployeeDTO).isNull();
	}
}

    

