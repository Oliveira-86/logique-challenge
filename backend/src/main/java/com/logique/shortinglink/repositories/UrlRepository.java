package com.logique.shortinglink.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.logique.shortinglink.entities.Url;

@Repository
public interface UrlRepository extends JpaRepository<Url, Long> {

}
