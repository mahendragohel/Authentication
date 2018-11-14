package com.auth.payload;

public class EducationDegreeResponse {

	private String degreeName;

	public String getDegreeName() {
		return degreeName;
	}

	public void setDegreeName(String degreeName) {
		this.degreeName = degreeName;
	}

	public EducationDegreeResponse(String degreeName) {
		super();
		this.degreeName = degreeName;
	}
	
}
