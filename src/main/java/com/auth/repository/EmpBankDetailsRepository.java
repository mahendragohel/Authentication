package com.auth.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.auth.model.EmpBankDetails;

public interface EmpBankDetailsRepository extends JpaRepository<EmpBankDetails, Long>{

	Optional<EmpBankDetails> findByUser_Id(Long id);
}
