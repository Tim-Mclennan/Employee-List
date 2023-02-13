package employeelist.com.employeelist;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.fasterxml.jackson.databind.ObjectMapper;

import employeelist.com.employeelist.Employees.EmployeeDTO;

@ExtendWith(SpringExtension.class)
@SpringBootTest
@AutoConfigureMockMvc
public class EmployeeControllerIntTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    public void testGetAllEmployees() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/employees")).andExpect(status().isOk());
    }

    @Test
    public void testGetEmployeeById() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/employees/1")).andExpect(status().isOk());
    }

    @Test
    public void testAddEmployee() throws Exception {
        EmployeeDTO employeeDTO = new EmployeeDTO();
        mockMvc.perform(MockMvcRequestBuilders.post("/employees").contentType(MediaType.APPLICATION_JSON).content(objectMapper.writeValueAsString(employeeDTO))).andExpect(status().isCreated());
    }

    @Test
    public void testUpdateEmployee() throws Exception {
        EmployeeDTO employeeDTO = new EmployeeDTO();
      mockMvc.perform(MockMvcRequestBuilders.put("/employees/1").contentType(MediaType.APPLICATION_JSON).content(objectMapper.writeValueAsString(employeeDTO))).andExpect(status().isOk());
    }

    @Test
    public void testDeleteEmployee() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.delete("/employees/1")).andExpect(status().isNoContent());
    }
}
