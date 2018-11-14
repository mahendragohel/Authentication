package com.auth.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.auth.model.EducationDegree;

public interface EducationDegreeRepository extends JpaRepository<EducationDegree, Long> {

	List<EducationDegree> findByEducationType_Id(Long id);
	List<EducationDegree> findByEducationType_Type(String type);
}
