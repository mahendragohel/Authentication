package com.auth.payload;

import java.util.Date;

import com.auth.model.Department;
import com.auth.model.Designation;
import com.auth.model.EmployeeDetails;
import com.auth.model.EmploymentStatus;
import com.auth.model.EmploymentType;
import com.auth.model.Gender;
import com.auth.model.SubDepartment;
import com.auth.model.User;

public class EmployeeDetailsResponse {

	private Long id;
	private String firstName;
	private String middleName;
	private String lastName;
	private Gender gender;
	private Date dateOfBirth;
    private Date dateOfJoining;
	private Designation designation;
	private Department department;
	private User user;
	private SubDepartment subDepartment;
	private EmploymentStatus employmentStatus;
	private EmploymentType employmentType;
	private Double experience;
	private Long phoneNumber;
	
	public EmployeeDetailsResponse(EmployeeDetails details) {
		super();
		this.id = details.getId();
		this.firstName = details.getFirstName();
		this.middleName = details.getMiddleName();
		this.lastName = details.getLastName();
		this.gender = details.getGender();
		this.dateOfBirth = details.getDateOfBirth();
		this.dateOfJoining = details.getDateOfJoining();
		this.department = new Department(details.getDepartment().getId(),details.getDepartment().getName());
		
		this.designation = new Designation(details.getDesignation().getId(),details.getDesignation().getName());
		this.designation.setDepartment(this.department);
		
		this.subDepartment = new SubDepartment(details.getSubDepartment().getId(),details.getSubDepartment().getName());
		this.subDepartment.setDepartment(this.department);
		this.phoneNumber = details.getPhoneNumber();
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

	public Department getDepartment() {
		return department;
	}
	public Designation getDesignation() {
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
	
	public Long getPhoneNumber() {
		return phoneNumber;
	}
	public SubDepartment getSubDepartment() {
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
	public void setDepartment(Department department) {
		this.department = department;
	}
	public void setDesignation(Designation designation) {
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
	public void setPhoneNumber(Long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public void setSubDepartment(SubDepartment subDepartment) {
		this.subDepartment = subDepartment;
	}
	public void setUser(User user) {
		this.user = user;
	}
	
	
}
