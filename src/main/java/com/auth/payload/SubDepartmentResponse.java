package com.auth.payload;

import com.auth.model.Department;
import com.auth.model.SubDepartment;

public class SubDepartmentResponse {

	private Long id;
	private String name;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public SubDepartmentResponse(SubDepartment subDepartment) {
		super();
		this.id = subDepartment.getId();
		this.name = subDepartment.getName();
	}
	
	
}
