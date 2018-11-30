package com.auth.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.auth.model.Department;
import com.auth.model.Designation;
import com.auth.payload.ApiResponse;
import com.auth.payload.DesignationResponse;
import com.auth.payload.ResponseBean;
import com.auth.repository.DesignationRepository;

@RestController
@RequestMapping("/api")
public class DesignationController {

	@Autowired
	private DesignationRepository designationRepository;
	
	@GetMapping("/designation/all")
	private ResponseEntity<ResponseBean> getAllDesignation()
	{
		List<Designation> all = designationRepository.findAll();
		List<DesignationResponse> result = new ArrayList<>();
		all.forEach(designation->{
			result.add(new DesignationResponse(designation.getId(), designation.getName(), designation.getDepartment()));		
		});
		ResponseBean response = new ResponseBean(result);
		return new ResponseEntity<ResponseBean>(response,HttpStatus.OK);
	}
	@PostMapping("/designation/new")
	private ResponseEntity<ResponseBean> addNewDesignation(@RequestParam(value = "departmentId")Long departmentId,@RequestBody Designation designation)
	{
		
		Department department = new Department();
		department.setId(departmentId);
		designation.setDepartment(department);
		designationRepository.saveAndFlush(designation);
		ResponseBean response = new ResponseBean(new ApiResponse(true, "Designation added successfully!"));
		return new ResponseEntity<ResponseBean>(response,HttpStatus.OK);
	}
}
