package com.auth.controller;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.auth.exception.ResourceNotFoundException;
import com.auth.model.Department;
import com.auth.model.Designation;
import com.auth.model.EmployeeDetails;
import com.auth.model.SubDepartment;
import com.auth.model.User;
import com.auth.payload.ApiResponse;
import com.auth.payload.EmployeeDetailsRequest;
import com.auth.payload.EmployeeDetailsResponse;
import com.auth.payload.ResponseBean;
import com.auth.repository.EmployeeDetailsRepository;

@RestController
@RequestMapping("/api")
public class EmployeeDetailsController {

	@Autowired
	private EmployeeDetailsRepository repository;
	
	@GetMapping("/user/profile/{userId}")
	private ResponseEntity<ResponseBean> getUseDetailsByUserId(@PathVariable(value = "userId")Long userId)
	{
		EmployeeDetails result = repository.findByUser_Id(userId)
				.orElseThrow(()->new ResourceNotFoundException("EmployeeDetails", "user_id", userId));
		
		ResponseBean response = new ResponseBean(new EmployeeDetailsResponse(result));
		return new ResponseEntity<ResponseBean>(response,HttpStatus.OK);
	}
	
	@PostMapping("/employee/profile/new")
	private ResponseEntity<ResponseBean> addNewEmployeeProfile(@RequestBody EmployeeDetailsRequest request)
	{
		User user = new User();
		user.setId(request.getUserId());
		
		Department department = new Department();
		department.setId(request.getDepartment().getId());
		
		Designation designation = new Designation();
		designation.setId(request.getDesignation().getId());
		designation.setDepartment(department);
		
		SubDepartment subDepartment = new SubDepartment();
		subDepartment.setId(request.getSubDepartment().getId());
		
		EmployeeDetails details = new EmployeeDetails(
				request.getFirstName(),
				request.getMiddleName(),
				request.getLastName(),
				request.getPhoneNumber(),
				request.getGender(),
				request.getDateOfBirth(),
				request.getDateOfJoining(),
				request.getEmploymentStatus(),
				request.getEmploymentType(),
				request.getExperience()
				);
		details.setUser(user);
		details.setDepartment(department);
		details.setDesignation(designation);
		details.setSubDepartment(subDepartment);
		repository.saveAndFlush(details);
		ResponseBean response = new ResponseBean(new ApiResponse(true,"Employee profile created successfully!"));
		return new ResponseEntity<ResponseBean>(response,HttpStatus.OK);
	}
	
	@PutMapping("/employee/profile/{profileId}")
	private ResponseEntity<ResponseBean> updateEmployeeProfile(@PathVariable(value = "profileId")Long profileId,@RequestBody EmployeeDetailsRequest request)
	{
		
		User user = new User();
		user.setId(request.getUserId());
		
		Designation designation = new Designation();
		designation.setId(request.getDesignation().getId());
		
		Department department = new Department();
		department.setId(request.getDepartment().getId());
		
		SubDepartment subDepartment = new SubDepartment();
		subDepartment.setId(request.getSubDepartment().getId());
		EmployeeDetails existing = repository.findById(profileId)
				.orElseThrow(()->new ResourceNotFoundException("Employee Profile", "profileId", profileId));
		
		EmployeeDetails details = new EmployeeDetails(
				profileId,
				request.getFirstName(),
				request.getMiddleName(),
				request.getLastName(),
				request.getPhoneNumber(),
				request.getGender(),
				request.getDateOfBirth(),
				request.getDateOfJoining(),
				request.getEmploymentStatus(),
				request.getEmploymentType(),
				request.getExperience()
				);
		details.setUser(user);
		details.setDepartment(department);
		details.setDesignation(designation);
		details.setSubDepartment(subDepartment);
		BeanUtils.copyProperties(details, existing);
		repository.saveAndFlush(existing);
		ResponseBean response = new ResponseBean(new ApiResponse(true,"Employee profile updated successfully!"));
		return new ResponseEntity<ResponseBean>(response,HttpStatus.OK);
	}
}
