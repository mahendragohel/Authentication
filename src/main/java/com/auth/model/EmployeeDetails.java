package com.auth.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

//public class EmployeeDetails {}
@Entity
@Table(name = "employee_details")
public class EmployeeDetails implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank
	@Size(max = 60)
	@Column(name = "first_name")
	private String firstName;
	
	@NotBlank
	@Size(max = 60)
	@Column(name = "middle_name")
	private String middleName;
	
	@NotBlank
	@Size(max = 60)
	@Column(name = "last_name")
	private String lastName;
	
	@Enumerated(EnumType.STRING)
	private Gender gender;
	
	@Temporal(TemporalType.DATE)
    @Column(name = "dob")
    private Date dateOfBirth;
	
	@Temporal(TemporalType.DATE)
    @Column(name = "doj")
    private Date dateOfJoining;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "designation_id")
	private Designation designation;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "department_id")
	private Department department;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	private User user;
	
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "sub_department_id")
	private SubDepartment subDepartment;
	
	@Enumerated(EnumType.STRING)
	private EmploymentStatus employmentStatus;
	
	@Enumerated(EnumType.STRING)
	private EmploymentType employmentType;
	
	private Double experience;
	
	@Size(max = 255)
	@Column(name = "profile_picture_url")
	private String profilePictureUrl = "DEFAULT_URL";

	public EmployeeDetails() {
		super();
	}

	public EmployeeDetails(Long id, @NotBlank @Size(max = 60) String firstName,
			@NotBlank @Size(max = 60) String middleName, @NotBlank @Size(max = 60) String lastName, Gender gender,
			Date dateOfBirth, Date dateOfJoining, EmploymentStatus employmentStatus, EmploymentType employmentType,
			@NotBlank Double experience) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		this.gender = gender;
		this.dateOfBirth = dateOfBirth;
		this.dateOfJoining = dateOfJoining;
		this.employmentStatus = employmentStatus;
		this.employmentType = employmentType;
		this.experience = experience;
	}
	
	
	
	public EmployeeDetails(Long id, @NotBlank @Size(max = 60) String firstName,
			@NotBlank @Size(max = 60) String middleName, @NotBlank @Size(max = 60) String lastName, Gender gender,
			Date dateOfBirth, Date dateOfJoining, EmploymentStatus employmentStatus, EmploymentType employmentType,
			Double experience, @Size(max = 255) String profilePictureUrl) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		this.gender = gender;
		this.dateOfBirth = dateOfBirth;
		this.dateOfJoining = dateOfJoining;
		this.employmentStatus = employmentStatus;
		this.employmentType = employmentType;
		this.experience = experience;
		this.profilePictureUrl = profilePictureUrl;
	}

	public String getProfilePictureUrl() {
		return profilePictureUrl;
	}

	public void setProfilePictureUrl(String profilePictureUrl) {
		this.profilePictureUrl = profilePictureUrl;
	}

	public EmployeeDetails(@NotBlank @Size(max = 60) String firstName,
			@NotBlank @Size(max = 60) String middleName, @NotBlank @Size(max = 60) String lastName,
			Gender gender,
			Date dateOfBirth, Date dateOfJoining, EmploymentStatus employmentStatus, EmploymentType employmentType,
			@NotBlank Double experience) {
		super();
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		this.gender = gender;
		this.dateOfBirth = dateOfBirth;
		this.dateOfJoining = dateOfJoining;
		this.employmentStatus = employmentStatus;
		this.employmentType = employmentType;
		this.experience = experience;
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

	public void setSubDepartment(SubDepartment subDepartment) {
		this.subDepartment = subDepartment;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	
}
