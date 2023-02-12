package employeelist.com.employeelist.Employees;

import org.springframework.lang.NonNull;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class EmployeeDTO {

    private Long id;
    
//    When a field is annotated with @NotBlank or @NotNull, the validation framework checks that the value of the field
//    is not null or an empty string. If it is, the validation framework will raise a constraint violation, indicating that the field must have a value.
    @NotBlank
    private String firstName;
    private String middleName;
    
    @NotBlank
    private String lastName;
    
    @NotBlank
    private String email;
    
    @NotNull
    @Min(10)
    private Long mobile;
    
    private String residentialAddress;
    private String contractType;
    private String startDate;
    private String endDate;
    private String timeBasis;
    private String hoursPerWeek;

    public EmployeeDTO() {}

    public EmployeeDTO(Long id, String firstName, String middleName, String lastName, String email, Long mobile,
                       String residentialAddress, String contractType, String startDate, String endDate,
                       String timeBasis, String hoursPerWeek) {
        this.id = id;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.email = email;
        this.mobile = mobile;
        this.residentialAddress = residentialAddress;
        this.contractType = contractType;
        this.startDate = startDate;
        this.endDate = endDate;
        this.timeBasis = timeBasis;
        this.hoursPerWeek = hoursPerWeek;
    }

    public Long getId() {
        return id;
    }
    
    @NonNull
    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getMobile() {
        return mobile;
    }

    public void setMobile(Long mobile) {
        this.mobile = mobile;
    }

    public String getResidentialAddress() {
        return residentialAddress;
    }

    public void setResidentialAddress(String residentialAddress) {
        this.residentialAddress = residentialAddress;
    }

    public String getContractType() {
        return contractType;
    }

    public void setContractType(String contractType) {
        this.contractType = contractType;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getTimeBasis() {
        return timeBasis;
    }

    public void setTimeBasis(String timeBasis) {
    	this.timeBasis = timeBasis;
    }
    
    public String getHoursPerWeek() {
        return hoursPerWeek;
    }

    public void setHoursPerWeek(String hoursPerWeek) {
        this.hoursPerWeek = hoursPerWeek;
    }
    
}
