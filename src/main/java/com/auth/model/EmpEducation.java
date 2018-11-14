package com.auth.model;

import java.io.Serializable;

import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
@Table(name = "employee_education")
public class EmpEducation implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank
	@Size(max = 255)
	private String college;
	
	@NotBlank
	@Size(max = 255)
	private String university;
	
	private Long duration;
	
	@Column(name = "year_of_passing")
	private Long yearOfPassing;
	
	@Size(max = 255)
	private String attachement;

	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "education_Type_id")
	private EducationType educationType;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "degree_id")
	private EducationDegree educationDegree;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	private User user;
	
	public EmpEducation() {
		super();
	}

	public EmpEducation( @NotBlank @Size(max = 255) String college,
			@NotBlank @Size(max = 255) String university, @NotBlank Long duration, @NotBlank Long yearOfPassing,
			@Size(max = 255) String attachement) {
		super();
		this.college = college;
		this.university = university;
		this.duration = duration;
		this.yearOfPassing = yearOfPassing;
		this.attachement = attachement;
	}

	public String getAttachement() {
		return attachement;
	}

	public String getCollege() {
		return college;
	}

	public Long getDuration() {
		return duration;
	}

	public EducationDegree getEducationDegree() {
		return educationDegree;
	}

	public EducationType getEducationType() {
		return educationType;
	}

	public Long getId() {
		return id;
	}

	public String getUniversity() {
		return university;
	}

	public User getUser() {
		return user;
	}

	public Long getYearOfPassing() {
		return yearOfPassing;
	}

	public void setAttachement(String attachement) {
		this.attachement = attachement;
	}

	public void setCollege(String college) {
		this.college = college;
	}

	public void setDuration(Long duration) {
		this.duration = duration;
	}

	public void setEducationDegree(EducationDegree educationDegree) {
		this.educationDegree = educationDegree;
	}

	public void setEducationType(EducationType educationType) {
		this.educationType = educationType;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setUniversity(String university) {
		this.university = university;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public void setYearOfPassing(Long yearOfPassing) {
		this.yearOfPassing = yearOfPassing;
	}
	
	
	
}
