package com.auth.payload;

import com.auth.model.AddressType;
import com.auth.model.EmployeeAddress;

public class AddressResponse {

	private Long addressId;
	private String address;
	private String landmark;
	private String city;
	private String state;
	private String country;
	private AddressType type;
	
	public AddressResponse(EmployeeAddress address) {
		super();
		this.addressId = address.getId();
		this.address = address.getAddress1()+" ,"+address.getAddress2();
		this.landmark = address.getLandmark();
		this.city = address.getCity();
		this.state = address.getState();
		this.country = address.getCountry();
		this.type = address.getType();
	}
	public String getAddress() {
		return address;
	}
	public Long getAddressId() {
		return addressId;
	}
	public String getCity() {
		return city;
	}
	public String getCountry() {
		return country;
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
	public void setAddress(String address) {
		this.address = address;
	}
	public void setAddressId(Long addressId) {
		this.addressId = addressId;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public void setCountry(String country) {
		this.country = country;
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
	
	
}
