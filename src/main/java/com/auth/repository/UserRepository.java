package com.auth.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.auth.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

	Optional<User> findByEmail(String email);
	Optional<User> findByUsername(String username);
	Optional<User> findByUsernameOrEmail(String username,String email);
	List<User> findByIdIn(List<Long> userIds);
	Boolean existsByUsername(String username);
	Boolean existsByEmail(String email);
	
//	@Query("select user from User user LEFT JOIN UserProfile up ON up.user.id = user.id where user.isActive=:active and up.isActive=:active")
//	List<User> findActiveUsers(@Param("active") String isActive);
//	
//	@Query("select up from UserProfile up where up.user.isActive=:active and up.isActive=:active")
//	List<UserProfile> findActiveUserProfile(@Param("active") String isActive);
	
}
