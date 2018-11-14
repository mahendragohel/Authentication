package com.auth.payload;

import java.util.Date;
import com.auth.model.EmployeeDetails;
import com.auth.model.EmploymentStatus;
import com.auth.model.EmploymentType;
import com.auth.model.Gender;
import com.auth.model.User;

public class EmployeeDetailsResponse {

	private Long id;
	private String firstName;
	private String middleName;
	private String lastName;
	private Gender gender;
	private Date dateOfBirth;
    private Date dateOfJoining;
	private String designation;
	private String department;
	private User user;
	private String subDepartment;
	private EmploymentStatus employmentStatus;
	private EmploymentType employmentType;
	private Double experience;
	
	public EmployeeDetailsResponse(EmployeeDetails details) {
		super();
		this.id = details.getId();
		this.firstName = details.getFirstName();
		this.middleName = details.getMiddleName();
		this.lastName = details.getLastName();
		this.gender = details.getGender();
		this.dateOfBirth = details.getDateOfBirth();
		this.dateOfJoining = details.getDateOfJoining();
		this.designation = details.getDesignation().getName();
		this.department = details.getDepartment().getName();
		this.subDepartment = details.getSubDepartment().getName();
		this.employmentStatus = details.getEmploymentStatus();
		this.employmentType = details.getEmploymentType();
		this.experience = details.getExperience();
	}
	public Date getDateOfBirth() {
		return dateOfBirth;
	}
	public Date getDateOfJoining() {
		return dateOfJoining;
	}
	public String getDepartment() {
		return department;
	}
	public String getDesignation() {
		return designation;
	}
	public EmploymentStatus getEmploymentStatus() {
		return employmentStatus;
	}
	public EmploymentType getEmploymentType() {
		return employmentType;
	}
	public Double getExperience() {
		return experience;
	}
	public String getFirstName() {
		return firstName;
	}
	public Gender getGender() {
		return gender;
	}
	public Long getId() {
		return id;
	}
	public String getLastName() {
		return lastName;
	}
	public String getMiddleName() {
		return middleName;
	}
	public String getSubDepartment() {
		return subDepartment;
	}
	public User getUser() {
		return user;
	}
	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public void setDateOfJoining(Date dateOfJoining) {
		this.dateOfJoining = dateOfJoining;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	public void setEmploymentStatus(EmploymentStatus employmentStatus) {
		this.employmentStatus = employmentStatus;
	}
	public void setEmploymentType(EmploymentType employmentType) {
		this.employmentType = employmentType;
	}
	public void setExperience(Double experience) {
		this.experience = experience;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}
	public void setSubDepartment(String subDepartment) {
		this.subDepartment = subDepartment;
	}
	public void setUser(User user) {
		this.user = user;
	}
	
	
}
