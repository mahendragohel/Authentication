package com.auth.payload;

import com.auth.model.Department;

public class DesignationResponse {
	
	private Long id;
	private String name;
	private Department department;
	
	public DesignationResponse(Long id, String name,Department department) {
		super();
		this.id = id;
		this.name = name;
		this.department = new Department(department.getId(),department.getName());
	}
	public Department getDepartment() {
		return department;
	}
	public Long getId() {
		return id;
	}
	public String getName() {
		return name;
	}
	public void setDepartment(Department department) {
		this.department = department;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	
	
	
	
}
