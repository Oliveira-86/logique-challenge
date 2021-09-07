package com.logique.shortinglink.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.logique.shortinglink.entities.Url;
import com.logique.shortinglink.services.UrlService;

@RestController
@RequestMapping(value = "/urls")
public class UrlResource {
	
	@Autowired
	private UrlService service;
	
	@GetMapping
	public ResponseEntity<List<Url>> findAll() {
		List<Url> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
}
