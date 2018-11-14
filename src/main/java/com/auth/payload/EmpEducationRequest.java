package com.auth.payload;

import com.auth.model.EducationDegree;
import com.auth.model.EducationType;

public class EmpEducationRequest {

	private String college;
	
	private String university;
	
	private Long duration;
	
	private Long yearOfPassing;
	
	private String attachement;
	
	private EducationType educationType;
	
	private EducationDegree educationDegree;
	

	public String getCollege() {
		return college;
	}

	public void setCollege(String college) {
		this.college = college;
	}

	public String getUniversity() {
		return university;
	}

	public void setUniversity(String university) {
		this.university = university;
	}

	public Long getDuration() {
		return duration;
	}

	public void setDuration(Long duration) {
		this.duration = duration;
	}

	public Long getYearOfPassing() {
		return yearOfPassing;
	}

	public void setYearOfPassing(Long yearOfPassing) {
		this.yearOfPassing = yearOfPassing;
	}

	public String getAttachement() {
		return attachement;
	}

	public void setAttachement(String attachement) {
		this.attachement = attachement;
	}

	public EducationType getEducationType() {
		return educationType;
	}

	public void setEducationType(EducationType educationType) {
		this.educationType = educationType;
	}

	public EducationDegree getEducationDegree() {
		return educationDegree;
	}

	public void setEducationDegree(EducationDegree educationDegree) {
		this.educationDegree = educationDegree;
	}
	
	
}
