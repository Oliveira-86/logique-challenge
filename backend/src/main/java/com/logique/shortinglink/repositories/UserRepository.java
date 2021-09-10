package com.logique.shortinglink.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.logique.shortinglink.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{
	User findByEmail(String email);
}
