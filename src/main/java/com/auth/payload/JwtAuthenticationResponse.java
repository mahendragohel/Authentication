package com.auth.payload;

import java.util.Set;

import com.auth.model.Role;

public class JwtAuthenticationResponse {
    private String accessToken;
    private String tokenType = "Bearer";
    private Set<Role> userRoles;
    private Long employeeId;
    private String email;
    
    public Long getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(Long employeeId) {
		this.employeeId = employeeId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public JwtAuthenticationResponse(String accessToken,Set<Role> roles,Long id,String email) {
        this.accessToken = accessToken;
        this.userRoles = roles;
        this.employeeId = id;
        this.email = email;
    }

	public String getAccessToken() {
        return accessToken;
    }

    public String getTokenType() {
        return tokenType;
    }

	public Set<Role> getUserRoles() {
		return userRoles;
	}

	public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public void setTokenType(String tokenType) {
        this.tokenType = tokenType;
    }

    public void setUserRoles(Set<Role> userRoles) {
		this.userRoles = userRoles;
	}
}
