package com.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.auth.model.Department;

public interface DepartmentRepository extends JpaRepository<Department, Long>{

}
