package com.backend.akshayproject.repository;

import com.backend.akshayproject.model.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Long>{
  Optional<User> findByEmail(@Param("email") String email);

  Optional<User> findByUsername(@Param("username") String username);
}
