package com.auth.controller;

import java.util.Collections;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.auth.exception.AppException;
import com.auth.exception.ResourceNotFoundException;
import com.auth.model.Role;
import com.auth.model.RoleName;
import com.auth.model.User;
import com.auth.payload.ApiResponse;
import com.auth.payload.JwtAuthenticationResponse;
import com.auth.payload.LoginRequest;
import com.auth.payload.ResponseBean;
import com.auth.payload.SignUpRequest;
import com.auth.repository.RoleRepository;
import com.auth.repository.UserRepository;
import com.auth.security.JwtTokenProvider;


@RestController
@RequestMapping("/api/auth")
public class AuthController {

	@Autowired
    AuthenticationManager authenticationManager;

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private JwtTokenProvider tokenProvider;
	
	@PostMapping("/signup")
	public ResponseEntity<ResponseBean> registerUser(@RequestBody SignUpRequest request)
	{
		if(userRepository.existsByUsername(request.getUsername()))
		{
			return new ResponseEntity( new ApiResponse(false,"Username already in use"),HttpStatus.BAD_REQUEST);
		}
		if(userRepository.existsByEmail(request.getEmail()))
		{
			return new ResponseEntity( new ApiResponse(false,"Email already in use"),HttpStatus.BAD_REQUEST);
		}
		
		User user = new User(request.getUsername(),request.getEmail(),request.getPassword());
		
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		
		Role userRole = roleRepository.findByName(RoleName.ROLE_USER)
                .orElseThrow(() -> new AppException("User Role not set."));
		user.setRoles(Collections.singleton(userRole));
		
		User result = userRepository.save(user);
		ResponseBean response = new ResponseBean(new ApiResponse(true, "User Register successfully!"));
		return new ResponseEntity<ResponseBean>(response,HttpStatus.OK);
	}
	
	@PostMapping("/signin")
    public ResponseEntity<ResponseBean> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

    	UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
                loginRequest.getUsernameOrEmail(),
                loginRequest.getPassword()
        );
    	System.out.println(token.toString());
    	
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsernameOrEmail(),
                        loginRequest.getPassword()
                )
        );
        User user = userRepository.findByUsername(loginRequest.getUsernameOrEmail())
                .orElseThrow(() -> new ResourceNotFoundException("User", "username", loginRequest.getUsernameOrEmail()));
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = tokenProvider.generateToken(authentication);
        
        ResponseBean response = new ResponseBean(new JwtAuthenticationResponse(jwt,user.getRoles(),user.getId(),user.getEmail()));
        return new ResponseEntity<ResponseBean>(response,HttpStatus.OK);
    }
	
	@PostMapping("/admin/registration")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<ResponseBean> registerAdmin(@Valid @RequestBody SignUpRequest signUpRequest) {
        if(userRepository.existsByUsername(signUpRequest.getUsername())) {
            return new ResponseEntity(new ApiResponse(false, "Username is already taken!"),
                    HttpStatus.BAD_REQUEST);
        }

        if(userRepository.existsByEmail(signUpRequest.getEmail())) {
            return new ResponseEntity(new ApiResponse(false, "Email Address already in use!"),
                    HttpStatus.BAD_REQUEST);
        }

        // Creating user's account
        User user = new User(signUpRequest.getUsername(),
                signUpRequest.getEmail(), signUpRequest.getPassword());

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        Role userRole = roleRepository.findByName(RoleName.ROLE_ADMIN)
                .orElseThrow(() -> new AppException("User Role not set."));

        user.setRoles(Collections.singleton(userRole));
        User result = userRepository.save(user);
		ResponseBean response = new ResponseBean(new ApiResponse(true, "Admin Register successfully!"));
		return new ResponseEntity<ResponseBean>(response,HttpStatus.OK);
    }
}
