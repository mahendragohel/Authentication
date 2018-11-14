package com.auth.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "employee_address")
public class EmployeeAddress implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "address_id")
	private Long id;
	
	@Size(max = 100)
	private String address1;
	
	@Size(max = 100)
	private String address2;
	
	@Size(max = 60)
	private String landmark;
	
	@Size(max = 60)
	private String city;
	
	@Size(max = 60)
	private String state;
	
	@Size(max = 60)
	private String country;
	
	@Size(max = 60)
	@Column(name="zip_code")
	private String zipCode;
	
	@Enumerated(EnumType.STRING)
	private AddressType type;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="user_id")
	private User user;

	public EmployeeAddress() {
		super();
	}

	public EmployeeAddress(Long id, @Size(max = 100) String address1, @Size(max = 100) String address2,
			@Size(max = 60) String landmark, @Size(max = 60) String city, @Size(max = 60) String state,
			@Size(max = 60) String country, @Size(max = 60) String zipCode, @NotBlank AddressType type) {
		super();
		this.id = id;
		this.address1 = address1;
		this.address2 = address2;
		this.landmark = landmark;
		this.city = city;
		this.state = state;
		this.country = country;
		this.zipCode = zipCode;
		this.type = type;
	}

	public String getAddress1() {
		return address1;
	}

	public String getAddress2() {
		return address2;
	}

	public String getCity() {
		return city;
	}

	public String getCountry() {
		return country;
	}

	public Long getId() {
		return id;
	}

	public String getLandmark() {
		return landmark;
	}

	public String getState() {
		return state;
	}

	public AddressType getType() {
		return type;
	}

	public User getUser() {
		return user;
	}

	public String getZipCode() {
		return zipCode;
	}

	public void setAddress1(String address1) {
		this.address1 = address1;
	}

	public void setAddress2(String address2) {
		this.address2 = address2;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setLandmark(String landmark) {
		this.landmark = landmark;
	}

	public void setState(String state) {
		this.state = state;
	}

	public void setType(AddressType type) {
		this.type = type;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}
	
	
}
