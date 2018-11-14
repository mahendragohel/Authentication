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

import com.auth.exception.ResourceNotFoundException;
import com.auth.model.EmployeeAddress;
import com.auth.model.User;
import com.auth.payload.AddressResponse;
import com.auth.payload.ResponseBean;
import com.auth.repository.EmployeeAddressRespository;
import com.auth.repository.UserRepository;

@RestController
@RequestMapping("/api")
public class EmployeeAddressController {

	@Autowired
	private EmployeeAddressRespository addressRespository;
	
	@Autowired
	private UserRepository userRepository;
	
	
	@GetMapping("/employee/address/{userId}")
	private ResponseEntity<ResponseBean> getAddressByUserId(@PathVariable(value = "userId")Long userId)
	{
		List<EmployeeAddress> addresses = new ArrayList<>();		
		addresses = addressRespository.findByUser_Id(userId);
		
		List<AddressResponse> results = new ArrayList<>();
		
		addresses.forEach(address->{
			AddressResponse response = new AddressResponse(address);
			results.add(response);
		});		
		ResponseBean response = new ResponseBean(results);
		return new ResponseEntity<ResponseBean>(response,HttpStatus.OK);
	}
	
	@GetMapping("/address/{addressId}")
	private ResponseEntity<ResponseBean> getAddressById(@PathVariable(value = "addressId")Long addressId)
	{	
		EmployeeAddress address =  addressRespository.findById(addressId)
				.orElseThrow(()->new ResourceNotFoundException("Address", "id", addressId));
		ResponseBean response = new ResponseBean(new AddressResponse(address));
		return new ResponseEntity<ResponseBean>(response,HttpStatus.OK);
	}
	
	@PostMapping("/employee/address/new")
	private ResponseEntity<ResponseBean> addNewAddressByUserId(@RequestParam(value = "userId")Long userId,@RequestBody EmployeeAddress address)
	{
		User user = new User();
		user.setId(userId);
		address.setUser(user);
		EmployeeAddress result = addressRespository.save(address);
		ResponseBean response = new ResponseBean(new AddressResponse(result));
		return new ResponseEntity<ResponseBean>(response,HttpStatus.OK);
	}
}
