package employeelist.com.employeelist.Employees;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    // DB generates primary key
    Long id;

    @Column
    String firstName;

    @Column
    String middleName;
    
    @Column
    String lastname;
    
    @Column
    String email;
    
    @Column
    Long mobile;
    
    @Column
    String ResidentialAddress;
    
    @Column
    String contractType;
    
    @Column
    String startDate;
    
    @Column
    String endDate;
    
    @Column
    String timeBasis;
    
    @Column
    String hoursPerWeek;
    
    
    //constructor so end user can create an employee:
    public Employee(String firstName, String middleName, String lastname, String email, Long mobile, String ResidentialAddress, String contractType, String startDate, String endDate, String timeBasis, String hoursPerWeek) {
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastname = lastname;
		this.email = email;
		this.mobile = mobile;
		this.ResidentialAddress = ResidentialAddress;
		this.contractType = contractType;
		this.startDate = startDate;
		this.endDate = endDate;
		this.timeBasis = timeBasis;
		this.hoursPerWeek = hoursPerWeek;
    }
    
    // This constructor is to avoid any errors that Spring may bring up due to an "unfound" constructor method.
    public Employee() {}
    
    // getters and setters
	public Long getId() {
		return id;
	}
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
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
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
		return ResidentialAddress;
	}
	public void setResidentialAddress(String residentialAddress) {
		ResidentialAddress = residentialAddress;
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
