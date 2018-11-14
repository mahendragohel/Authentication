package com.auth.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.auth.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

	Optional<User> findByEmail(String email);
	Optional<User> findByUsername(String username);
	Optional<User> findByUsernameOrEmail(String username,String email);
	List<User> findByIdIn(List<Long> userIds);
	Boolean existsByUsername(String username);
	Boolean existsByEmail(String email);
	
}
