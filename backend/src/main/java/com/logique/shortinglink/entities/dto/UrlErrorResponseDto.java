package com.logique.shortinglink.entities.dto;

import java.io.Serializable;

public class UrlErrorResponseDto implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private String status;
	private String error;
	
	public UrlErrorResponseDto() {
	}

	public UrlErrorResponseDto(String status, String error) {
		super();
		this.status = status;
		this.error = error;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getError() {
		return error;
	}

	public void setError(String error) {
		this.error = error;
	}

	@Override
	public String toString() {
		return "UrlErroeResponseDto [status=" + status + ", error=" + error + "]";
	}
}
