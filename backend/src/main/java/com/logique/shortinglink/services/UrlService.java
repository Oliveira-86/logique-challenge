package com.logique.shortinglink.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.logique.shortinglink.entities.Url;
import com.logique.shortinglink.repositories.UrlRepository;

@Service
public class UrlService {
	
	@Autowired
	private UrlRepository repository;
	
	public List<Url> findAll() {
		return repository.findAll();
	}
}
