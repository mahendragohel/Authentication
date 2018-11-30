package com.auth.payload;

import com.auth.model.Department;

public class DesignationResponse {
	
	private Long designationId;
	private String designation;
	private Long departmentId;
	private String department;
	
	public DesignationResponse(Long designationId, String designation, Department department) {
		super();
		this.designationId = designationId;
		this.designation = designation;
		this.departmentId = department.getId();
		this.department = department.getName();
	}
	public Long getDesignationId() {
		return designationId;
	}
	public void setDesignationId(Long designationId) {
		this.designationId = designationId;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	public Long getDepartmentId() {
		return departmentId;
	}
	public void setDepartmentId(Long departmentId) {
		this.departmentId = departmentId;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	
	
}
