package com.auth.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.auth.model.Department;
import com.auth.payload.ApiResponse;
import com.auth.payload.ResponseBean;
import com.auth.repository.DepartmentRepository;

@RestController
@RequestMapping("/api")
public class DepartmentController {

	@Autowired
	private DepartmentRepository departmentRepository;
	
	@PostMapping("/departments/new")
	private ResponseEntity<ResponseBean> addNewDepartment(@RequestBody Department department)
	{
		departmentRepository.saveAndFlush(department);
		ResponseBean response = new ResponseBean(new ApiResponse(true, "Department added successfully !"));
		return new ResponseEntity<ResponseBean>(response,HttpStatus.OK);
	}
	
	@GetMapping("/departments/all")
	private ResponseEntity<ResponseBean> getAllDepartment(){
		List<Department> all = departmentRepository.findAll();
		ResponseBean response = new ResponseBean(all);
		return new ResponseEntity<ResponseBean>(response,HttpStatus.OK);
	}
}
