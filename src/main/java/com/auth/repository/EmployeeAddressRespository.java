package com.auth.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.auth.model.EmployeeAddress;

public interface EmployeeAddressRespository extends JpaRepository<EmployeeAddress, Long>{

	List<EmployeeAddress> findByUser_Id(Long id);
}
