package com.auth.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "designations")
public class Designation implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;

	@NotBlank
	@Size(max = 100)
	private String name;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="department_id")
	private Department department;
	
	public Designation() {
		super();
	}

	public Designation(Long id, @NotBlank @Size(max = 100) String name) {
		super();
		this.id = id;
		this.name = name;
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
