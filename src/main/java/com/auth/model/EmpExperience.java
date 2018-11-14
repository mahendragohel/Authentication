package com.auth.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
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

@Entity
@Table(name = "employee_experience")
public class EmpExperience implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank
	@Size(max = 100)
	private String company;
	
	@NotBlank
	@Size(max = 100)
	private String designation;
	
	@NotBlank
	@Temporal(TemporalType.DATE)
	@Column(name = "from_date")
	private Date fromDate;
	
	@NotBlank
	@Temporal(TemporalType.DATE)
	@Column(name = "to_date")
	private Date toDate;
	
	private Double experience;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	private User user;

	public EmpExperience() {
		super();
	}

	public EmpExperience(Long id, @NotBlank @Size(max = 100) String company,
			@NotBlank @Size(max = 100) String designation, @NotBlank Date fromDate, @NotBlank Date toDate,
			Double experience) {
		super();
		this.id = id;
		this.company = company;
		this.designation = designation;
		this.fromDate = fromDate;
		this.toDate = toDate;
		this.experience = experience;
	}

	public String getCompany() {
		return company;
	}

	public String getDesignation() {
		return designation;
	}

	public Double getExperience() {
		return experience;
	}

	public Date getFromDate() {
		return fromDate;
	}

	public Long getId() {
		return id;
	}

	public Date getToDate() {
		return toDate;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public void setExperience(Double experience) {
		this.experience = experience;
	}

	public void setFromDate(Date fromDate) {
		this.fromDate = fromDate;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setToDate(Date toDate) {
		this.toDate = toDate;
	}
	
	
	
	
}
