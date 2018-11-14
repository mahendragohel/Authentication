package com.auth.controller;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.auth.exception.ResourceNotFoundException;
import com.auth.model.EducationType;
import com.auth.payload.ApiResponse;
import com.auth.payload.ResponseBean;
import com.auth.repository.EducationTypeRepository;

@RestController
@RequestMapping("/api/educationType")
public class EducationTypeController {

	@Autowired
	private EducationTypeRepository educationTypeRepository;
	
	@GetMapping("/all")
	private ResponseEntity<ResponseBean> getAllEducationType()
	{
		List<EducationType> all = educationTypeRepository.findAll();
		ResponseBean response = new ResponseBean(all);
		return new ResponseEntity<ResponseBean>(response,HttpStatus.OK);
	}
	
	@PostMapping("/new")
	private ResponseEntity<ResponseBean> addEducationType(@RequestBody EducationType educationType)
	{
		educationTypeRepository.saveAndFlush(educationType);
		ResponseBean response = new ResponseBean(new ApiResponse(true, "Education Type added successfully!"));
		return new ResponseEntity<ResponseBean>(response,HttpStatus.OK);
	}
	
	@PutMapping("/update")
	private ResponseEntity<ResponseBean> updateEducationType(@RequestBody EducationType educationType)
	{
		EducationType existing = educationTypeRepository.findById(educationType.getId())
				.orElseThrow(()->new ResourceNotFoundException("EducationType", "id", educationType.getId()));
		BeanUtils.copyProperties(educationType, existing);
		educationTypeRepository.saveAndFlush(existing);
		ResponseBean response = new ResponseBean(new ApiResponse(true, "Education Type updated successfully!"));
		return new ResponseEntity<ResponseBean>(response,HttpStatus.OK);
	}
}
