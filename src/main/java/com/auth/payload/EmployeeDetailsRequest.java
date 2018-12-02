package com.auth.payload;

import java.util.Date;

import com.auth.model.EmploymentStatus;
import com.auth.model.EmploymentType;
import com.auth.model.Gender;

public class EmployeeDetailsRequest {

	private Long id;
	private String firstName;
	private String middleName;
	private String lastName;
	private Long phoneNumber;
	private Gender gender;
	private Date dateOfBirth;
	private Date dateOfJoining;
	private Long designationId;
    private Long departmentId;
	private Long userId;
	private Long subDepartmentId;
	private EmploymentStatus employmentStatus;
	private EmploymentType employmentType;
	private Double experience;
	
	public Date getDateOfBirth() {
		return dateOfBirth;
	}
	public Date getDateOfJoining() {
		return dateOfJoining;
	}
	public Long getDepartmentId() {
		return departmentId;
	}
	public Long getDesignationId() {
		return designationId;
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
	public Long getSubDepartmentId() {
		return subDepartmentId;
	}
	public Long getUserId() {
		return userId;
	}
	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public void setDateOfJoining(Date dateOfJoining) {
		this.dateOfJoining = dateOfJoining;
	}
	public void setDepartmentId(Long departmentId) {
		this.departmentId = departmentId;
	}
	public void setDesignationId(Long designationId) {
		this.designationId = designationId;
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
	public void setSubDepartmentId(Long subDepartmentId) {
		this.subDepartmentId = subDepartmentId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	
	
}
