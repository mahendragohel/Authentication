package com.auth.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.auth.exception.ResourceNotFoundException;
import com.auth.model.EmployeeSkills;
import com.auth.model.User;
import com.auth.payload.ApiResponse;
import com.auth.payload.EmployeeSkillsResponse;
import com.auth.payload.ResponseBean;
import com.auth.repository.EmployeeSkillsRepository;

@RestController
@RequestMapping("/api/skills")
public class EmployeeSkillsController {

	@Autowired
	private EmployeeSkillsRepository repository;
	
	@GetMapping("/{employeeId}")
	private ResponseEntity<ResponseBean> getEmployeeSkills(@PathVariable(value = "employeeId")Long employeeId)
	{
		EmployeeSkills skills = repository.findByUser_Id(employeeId)
				.orElseThrow(()->new ResourceNotFoundException("Employee", "Employee Id", employeeId));
		EmployeeSkillsResponse skillResponse = new EmployeeSkillsResponse(skills.getSkillId(), skills.getUser(), skills.getSkillNames());
		ResponseBean response = new ResponseBean(skillResponse);
		return new ResponseEntity<ResponseBean>(response,HttpStatus.OK);
	}
	
	@PostMapping("/new")
	private ResponseEntity<ResponseBean> setEmployeeSkills(@RequestBody EmployeeSkillsResponse skillRequest )
	{
		EmployeeSkills skills = new EmployeeSkills();
		User user = new User();
		user.setId(skillRequest.getEmployeeId());
		
		skills.setSkillNames(skillRequest.getSkills());
		skills.setUser(user);
		
		repository.saveAndFlush(skills);
		
		ResponseBean response = new ResponseBean(new ApiResponse(true, "Employee Skills added successfully!"));
		return new ResponseEntity<ResponseBean>(response,HttpStatus.OK);
	}
	
	
	
}
