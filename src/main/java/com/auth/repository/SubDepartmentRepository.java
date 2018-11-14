package com.auth.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.auth.model.SubDepartment;

public interface SubDepartmentRepository extends JpaRepository<SubDepartment, Long>{
	List<SubDepartment> findByDepartment_Id(Long id);
}
