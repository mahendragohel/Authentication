package com.auth.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.auth.model.Department;
import com.auth.model.SubDepartment;
import com.auth.payload.ApiResponse;
import com.auth.payload.ResponseBean;
import com.auth.payload.SubDepartmentResponse;
import com.auth.repository.SubDepartmentRepository;

@RestController
@RequestMapping("/api")
public class SubDepartmentController {

	@Autowired
	private SubDepartmentRepository subDepartmentRepository;
	
	@PostMapping("/subdepartments/new")
	private ResponseEntity<ResponseBean> addNewDepartment(@RequestParam (value = "departmentId")Long departmentId,@RequestBody SubDepartment subDepartment)
	{
		Department department = new Department();
		department.setId(departmentId);
		subDepartment.setDepartment(department);
		subDepartmentRepository.saveAndFlush(subDepartment);
		ResponseBean response = new ResponseBean(new ApiResponse(true, "Department added successfully !"));
		return new ResponseEntity<ResponseBean>(response,HttpStatus.OK);
	}
	
	@GetMapping("/subdepartments/{departmentId}")
	private ResponseEntity<ResponseBean> getAllDepartment(@PathVariable(value="departmentId")Long departmentId){
		List<SubDepartment> all = subDepartmentRepository.findByDepartment_Id(departmentId);
		List<SubDepartmentResponse> results = new ArrayList<>();
		
		all.forEach(subdepartment ->{
			results.add(new SubDepartmentResponse(subdepartment));
		});
		ResponseBean response = new ResponseBean(results);
		return new ResponseEntity<ResponseBean>(response,HttpStatus.OK);
	}
}
