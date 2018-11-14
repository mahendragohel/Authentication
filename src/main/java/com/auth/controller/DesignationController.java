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

import com.auth.model.Designation;
import com.auth.payload.ApiResponse;
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
		ResponseBean response = new ResponseBean(all);
		return new ResponseEntity<ResponseBean>(response,HttpStatus.OK);
	}
	@PostMapping("/designation/new")
	private ResponseEntity<ResponseBean> addNewDesignation(@RequestBody Designation designation)
	{
		designationRepository.saveAndFlush(designation);
		ResponseBean response = new ResponseBean(new ApiResponse(true, "Designation added successfully!"));
		return new ResponseEntity<ResponseBean>(response,HttpStatus.OK);
	}
}
