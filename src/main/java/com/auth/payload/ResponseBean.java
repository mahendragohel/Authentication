package com.auth.payload;

import java.io.Serializable;

public class ResponseBean implements Serializable {

	private Object payload;
	private StatusCode status;
	
	public ResponseBean() {
		super();
	}
	public ResponseBean(Object payload) {
		super();
		this.payload = payload;
		this.status = StatusCode.SUCCESS;
	}
	public Object getPayload() {
		return payload;
	}
	public StatusCode getStatus() {
		return status;
	}
	public void setPayload(Object payload) {
		this.payload = payload;
	}
	public void setStatus(StatusCode status) {
		this.status = status;
	}
	
}
