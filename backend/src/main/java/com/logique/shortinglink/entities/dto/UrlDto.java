package com.logique.shortinglink.entities.dto;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;

public class UrlDto implements Serializable {
	private static final long serialVersionUID = 1L;

	@NotBlank(message = "Required field")
	private String url;
	private String expirationDate;
	
	public UrlDto() {
	}
	
	public UrlDto(String url, String expirationDate) {
		super();
		this.url = url;
		this.expirationDate = expirationDate;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getExpirationDate() {
		return expirationDate;
	}

	public void setExpirationDate(String expirationDate) {
		this.expirationDate = expirationDate;
	}

	@Override
	public String toString() {
		return "UrlDto [url=" + url + ", expirationDate=" + expirationDate + "]";
	}
	
	
}
