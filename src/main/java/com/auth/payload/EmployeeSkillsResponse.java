package com.auth.payload;

import com.auth.model.User;

public class EmployeeSkillsResponse {
	private Long id;
	private Long employeeId;
	private String skills;
	
	
	public EmployeeSkillsResponse(Long id, User user, String skills) {
		super();
		this.id = id;
		this.employeeId = user.getId();
		this.skills = skills;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(Long employeeId) {
		this.employeeId = employeeId;
	}
	public String getSkills() {
		return skills;
	}
	public void setSkills(String skills) {
		this.skills = skills;
	}
	
	
}
