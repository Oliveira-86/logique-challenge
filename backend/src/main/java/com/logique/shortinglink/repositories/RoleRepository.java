package com.logique.shortinglink.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.logique.shortinglink.entities.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long>{

}