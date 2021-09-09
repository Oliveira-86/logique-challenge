package com.logique.shortinglink.services;
import java.util.List;

import org.springframework.stereotype.Service;

import com.logique.shortinglink.entities.Url;
import com.logique.shortinglink.entities.dto.UrlDto;

@Service
public interface UrlService {
	
	public Url generateShortLink(UrlDto urlDto);
	public Url persistShortLink(Url url);
	public Url getEncodedUrl(String url);
	public void deleteShortLink(Url url);
	public List<Url> findAll();
}
