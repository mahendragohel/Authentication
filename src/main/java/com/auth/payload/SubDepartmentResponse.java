package com.auth.payload;

import com.auth.model.Department;
import com.auth.model.SubDepartment;

public class SubDepartmentResponse {

	private Long id;
	private String name;
	private Department department;
	
	public SubDepartmentResponse(SubDepartment subDepartment,Department department) {
		super();
		this.id = subDepartment.getId();
		this.name = subDepartment.getName();
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
