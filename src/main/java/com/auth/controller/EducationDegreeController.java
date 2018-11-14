package com.auth.controller;

import java.util.ArrayList;
import java.util.List;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.auth.exception.ResourceNotFoundException;
import com.auth.model.EducationDegree;
import com.auth.model.EducationType;
import com.auth.payload.ApiResponse;
import com.auth.payload.EducationDegreeResponse;
import com.auth.payload.ResponseBean;
import com.auth.repository.EducationDegreeRepository;

@RestController
@RequestMapping("/api/educationDegree")
public class EducationDegreeController {

	@Autowired
	private EducationDegreeRepository degreeRepository;
	
	@GetMapping("/{degreeType}")
	private ResponseEntity<ResponseBean> getAllDegreeByEducationType(@PathVariable(value = "degreeType")String degreeType)
	{
		List<EducationDegree> all = degreeRepository.findByEducationType_Type(degreeType);
		List<EducationDegreeResponse> result = new ArrayList<>();
		
		all.forEach(degree ->{
			result.add(new EducationDegreeResponse(degree.getName()));
		});
		
		ResponseBean response = new ResponseBean(result);
		return new ResponseEntity<ResponseBean>(response,HttpStatus.OK);
	}
	
	
	@PostMapping("/new")
	private ResponseEntity<ResponseBean> addDegree(@RequestParam(value = "educationTypeId")Long educationTypeId,@RequestBody EducationDegree degree)
	{
		EducationType type = new EducationType();
		type.setId(educationTypeId);
		degree.setEducationType(type);
		degreeRepository.saveAndFlush(degree);
		ResponseBean response = new ResponseBean(new ApiResponse(true, "Degree added succesfully!"));
		return new ResponseEntity<ResponseBean>(response,HttpStatus.OK);
	}
	
	@PutMapping("/update")
	private ResponseEntity<ResponseBean> updateDegree(@RequestParam(value = "educationTypeId")Long educationTypeId,@RequestBody EducationDegree degree)
	{
		EducationType type = new EducationType();
		type.setId(educationTypeId);
		degree.setEducationType(type);
		
		EducationDegree existing = degreeRepository.findById(degree.getId())
				.orElseThrow(()-> new ResourceNotFoundException("Degree", "id", degree.getId()));
		BeanUtils.copyProperties(degree, existing);
		degreeRepository.saveAndFlush(existing);
		
		ResponseBean response = new ResponseBean(new ApiResponse(true, "Degree updated succesfully!"));
		return new ResponseEntity<ResponseBean>(response,HttpStatus.OK);
	}
}
