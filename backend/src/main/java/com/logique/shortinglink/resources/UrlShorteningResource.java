package com.logique.shortinglink.resources;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.logique.shortinglink.entities.Url;
import com.logique.shortinglink.entities.dto.UrlDto;
import com.logique.shortinglink.entities.dto.UrlErrorResponseDto;
import com.logique.shortinglink.entities.dto.UrlResponseDto;
import com.logique.shortinglink.services.UrlService;

@RestController
public class UrlShorteningResource {

	@Autowired
	private UrlService urlService;

	@PostMapping("/generate")
	public ResponseEntity<?> generateShortLink(@RequestBody UrlDto urlDto) {
		Url urlToRet = urlService.generateShortLink(urlDto);

		if (urlToRet != null) {
			UrlResponseDto urlResponseDto = new UrlResponseDto();
			urlResponseDto.setOriginalUrl(urlToRet.getOriginalUrl());
			urlResponseDto.setExpirationDate(urlToRet.getExpirationDate());
			urlResponseDto.setShortLink(urlToRet.getShortLink());
			return new ResponseEntity<UrlResponseDto>(urlResponseDto, HttpStatus.OK);
		}

		UrlErrorResponseDto urlErrorResponseDto = new UrlErrorResponseDto();
		urlErrorResponseDto.setStatus("404");
		urlErrorResponseDto.setError("There was an error processing your request. please try again.");
		return new ResponseEntity<UrlErrorResponseDto>(urlErrorResponseDto, HttpStatus.OK);
	}

	@GetMapping("/{shortLink}")
	public ResponseEntity<?> redirectToOriginalUrl(@PathVariable String shortLink, HttpServletResponse response)
			throws IOException {

		if (StringUtils.isEmpty(shortLink)) {
			UrlErrorResponseDto urlErrorResponseDto = new UrlErrorResponseDto();
			urlErrorResponseDto.setError("Invalid Url");
			urlErrorResponseDto.setStatus("400");
			return new ResponseEntity<UrlErrorResponseDto>(urlErrorResponseDto, HttpStatus.OK);
		}
		Url urlToRet = urlService.getEncodedUrl(shortLink);

		if (urlToRet == null) {
			UrlErrorResponseDto urlErrorResponseDto = new UrlErrorResponseDto();
			urlErrorResponseDto.setError("Url does not exist or it might have expired!");
			urlErrorResponseDto.setStatus("400");
			return new ResponseEntity<UrlErrorResponseDto>(urlErrorResponseDto, HttpStatus.OK);
		}

		if (urlToRet.getExpirationDate().isBefore(LocalDateTime.now())) {
			urlService.deleteShortLink(urlToRet);
			UrlErrorResponseDto urlErrorResponseDto = new UrlErrorResponseDto();
			urlErrorResponseDto.setError("Url Expired. Please try generating a fresh one.");
			urlErrorResponseDto.setStatus("200");
			return new ResponseEntity<UrlErrorResponseDto>(urlErrorResponseDto, HttpStatus.OK);
		}

		response.sendRedirect(urlToRet.getOriginalUrl());
		return null;
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<UrlDto> delete(@PathVariable Long id) {
		urlService.deleteById(id);
		return ResponseEntity.noContent().build();
	}
	
	@GetMapping("/links")
	public ResponseEntity<List<Url>> findAll() {
		List<Url> list = urlService.findAll();
		return ResponseEntity.ok().body(list);
	}
}
