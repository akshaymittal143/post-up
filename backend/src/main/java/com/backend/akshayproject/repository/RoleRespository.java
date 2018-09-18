package com.backend.akshayproject.repository;

import com.backend.akshayproject.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface RoleRespository extends JpaRepository<Role, Long>{
  Role findByRole(@Param("role") String role);
}
