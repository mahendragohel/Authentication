package com.auth.payload;

import com.auth.model.EducationDegree;
import com.auth.model.EducationType;

public class EmpEducationResponse {
	
	private Long id;
	private String college;

	private String university;

	private Long duration;
	
	private Long yearOfPassing;
	
	private String attachement;
	
	private String educationType;
	
	private String educationDegree;
	
	
	
	public EmpEducationResponse(Long id, String college, String university, Long duration, Long yearOfPassing,
			String attachement, String educationType, String educationDegree) {
		super();
		this.id = id;
		this.college = college;
		this.university = university;
		this.duration = duration;
		this.yearOfPassing = yearOfPassing;
		this.attachement = attachement;
		this.educationType = educationType;
		this.educationDegree = educationDegree;
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

	
	public String getEducationDegree() {
		return educationDegree;
	}

	public String getEducationType() {
		return educationType;
	}

	public Long getId() {
		return id;
	}

	public String getUniversity() {
		return university;
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

	public void setEducationDegree(String educationDegree) {
		this.educationDegree = educationDegree;
	}

	public void setEducationType(String educationType) {
		this.educationType = educationType;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setUniversity(String university) {
		this.university = university;
	}

	public void setYearOfPassing(Long yearOfPassing) {
		this.yearOfPassing = yearOfPassing;
	}
	
	
}
