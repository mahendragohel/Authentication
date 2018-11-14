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
import com.auth.model.EmpEducation;
import com.auth.model.User;
import com.auth.payload.ApiResponse;
import com.auth.payload.EmpEducationRequest;
import com.auth.payload.EmpEducationResponse;
import com.auth.payload.ResponseBean;
import com.auth.repository.EmpEducationRepository;

@RestController
@RequestMapping("/api/employee/education")
public class EmpEducationController {

	@Autowired
	private EmpEducationRepository educationRepository;
	
	@GetMapping("/{userId}")
	private ResponseEntity<ResponseBean> getEmployeeEducations(@PathVariable(value="userId")Long userId)
	{
		List<EmpEducation> allEducations = educationRepository.findByUser_Id(userId);
		List<EmpEducationResponse> result = new ArrayList<>();
		
		allEducations.forEach(education ->{
			result.add(new EmpEducationResponse(
					education.getId(),
					education.getCollege(), 
					education.getUniversity(), 
					education.getDuration(), 
					education.getYearOfPassing(), 
					education.getAttachement(), 
					education.getEducationType().getType(), 
					education.getEducationDegree().getName()));
		});
		
		ResponseBean response = new ResponseBean(result);
		return new ResponseEntity<ResponseBean>(response,HttpStatus.OK);
	}
	
	@PostMapping("/{userId}")
	private ResponseEntity<ResponseBean> addEmployeeEducations(@PathVariable(value="userId")Long userId,@RequestBody EmpEducationRequest request)
	{
		User user = new User();
		user.setId(userId);
		EducationType type = new EducationType();
		type.setId(request.getEducationType().getId());
		EducationDegree degree = new EducationDegree();
		degree.setId(request.getEducationDegree().getId());
		
		EmpEducation education = new EmpEducation(request.getCollege(), request.getUniversity(), request.getDuration(), request.getYearOfPassing(), request.getAttachement());
		education.setUser(user);
		education.setEducationDegree(degree);
		education.setEducationType(type);

		educationRepository.saveAndFlush(education);
		ResponseBean response = new ResponseBean(new ApiResponse(true, "Employee education added successfully!"));
		return new ResponseEntity<ResponseBean>(response,HttpStatus.OK);
	}
	
	@PutMapping("/{userId}")
	private ResponseEntity<ResponseBean> updateEmployeeEducations(@RequestParam(value="id")Long id,@PathVariable(value="userId")Long userId,@RequestBody EmpEducationRequest request)
	{
		User user = new User();
		user.setId(userId);
		EducationType type = new EducationType();
		type.setId(request.getEducationType().getId());
		EducationDegree degree = new EducationDegree();
		degree.setId(request.getEducationDegree().getId());
		
		EmpEducation education = new EmpEducation(request.getCollege(), request.getUniversity(), request.getDuration(), request.getYearOfPassing(), request.getAttachement());
		education.setId(id);
		education.setUser(user);
		education.setEducationDegree(degree);
		education.setEducationType(type);

		EmpEducation existing = educationRepository.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("Employee education", "id", id));
		BeanUtils.copyProperties(education, existing);
		educationRepository.saveAndFlush(existing);
		
		ResponseBean response = new ResponseBean(new ApiResponse(true, "Employee education updated successfully!"));
		return new ResponseEntity<ResponseBean>(response,HttpStatus.OK);
	}
	
}
