package com.auth.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.auth.model.EmpEducation;

public interface EmpEducationRepository extends JpaRepository<EmpEducation, Long>{

	List<EmpEducation> findByUser_Id(Long id);
}
