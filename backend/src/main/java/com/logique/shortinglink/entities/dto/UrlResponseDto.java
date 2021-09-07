package com.logique.shortinglink.entities.dto;

import java.io.Serializable;
import java.time.LocalDateTime;

public class UrlResponseDto implements Serializable {
	private static final long serialVersionUID = 1L;

	private String originalUrl;
	private String shortLink;
	private LocalDateTime expirationDate;
	
	public UrlResponseDto() {
	}
	
	public UrlResponseDto(String originalUrl, String shortLink, LocalDateTime expirationDate) {
		super();
		this.originalUrl = originalUrl;
		this.shortLink = shortLink;
		this.expirationDate = expirationDate;
	}

	public String getOriginalUrl() {
		return originalUrl;
	}

	public void setOriginalUrl(String originalUrl) {
		this.originalUrl = originalUrl;
	}

	public String getShortLink() {
		return shortLink;
	}

	public void setShortLink(String shortLink) {
		this.shortLink = shortLink;
	}

	public LocalDateTime getExpirationDate() {
		return expirationDate;
	}

	public void setExpirationDate(LocalDateTime expirationDate) {
		this.expirationDate = expirationDate;
	}

	@Override
	public String toString() {
		return "UrlResponseDto "
				+ "["
				+ "originalUrl=" + originalUrl 
				+ ", shortLink=" + shortLink 
				+ ", expiraionDate=" + expirationDate 
				+ "]";
	}
	
	
}
