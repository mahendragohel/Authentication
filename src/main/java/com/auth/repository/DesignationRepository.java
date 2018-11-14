package com.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.auth.model.Designation;

public interface DesignationRepository extends JpaRepository<Designation, Long>{

}
