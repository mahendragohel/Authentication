package com.auth.controller;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.auth.exception.ResourceNotFoundException;
import com.auth.model.EmpBankDetails;
import com.auth.model.User;
import com.auth.payload.ApiResponse;
import com.auth.payload.EmpBankDetailsResponse;
import com.auth.payload.ResponseBean;
import com.auth.repository.EmpBankDetailsRepository;

@RestController
@RequestMapping("/api")
public class EmpBankDetailsController {

	@Autowired
	private EmpBankDetailsRepository bankDetailsRepository;
	
	@GetMapping("/employee/bank/{userId}")
	private ResponseEntity<ResponseBean> getEmployeeBankDetails(@PathVariable(value="userId")Long userId)
	{
		EmpBankDetails result = bankDetailsRepository.findByUser_Id(userId)
				.orElseThrow(()-> new ResourceNotFoundException("Employee Bank Details", "Employee Id", userId));
		
		ResponseBean response = new ResponseBean(new EmpBankDetailsResponse(
				result.getId(), 
				result.getAccountNo(), 
				result.getBankName(), 
				result.getIfscCode(), 
				result.getType()));
		return new ResponseEntity<ResponseBean>(response,HttpStatus.OK);
	}
	
	@PostMapping("/employee/bank/{userId}")
	private ResponseEntity<ResponseBean> addEmployeeBankDetails(@PathVariable(value="userId")Long userId,@RequestBody EmpBankDetails bankDetails)
	{
		User user = new User();
		user.setId(userId);
		bankDetails.setUser(user);
		bankDetailsRepository.saveAndFlush(bankDetails);
		
		ResponseBean response = new ResponseBean(new ApiResponse(true, "Bank details added successfully"));
		return new ResponseEntity<ResponseBean>(response,HttpStatus.OK);
	}
	
	@PutMapping("/employee/bank/{userId}")
	private ResponseEntity<ResponseBean> updateEmployeeBankDetails(@PathVariable(value="userId")Long userId,@RequestBody EmpBankDetails bankDetails)
	{
		User user = new User();
		user.setId(userId);
		bankDetails.setUser(user);
		EmpBankDetails existing = bankDetailsRepository.findByUser_Id(userId)
				.orElseThrow(()-> new ResourceNotFoundException("Employee Bank", "Eployee id", userId));
		BeanUtils.copyProperties(bankDetails, existing);
		bankDetailsRepository.saveAndFlush(existing);
		ResponseBean response = new ResponseBean(new ApiResponse(true, "Bank details updated successfully"));
		return new ResponseEntity<ResponseBean>(response,HttpStatus.OK);
	}
	
	
	
}
