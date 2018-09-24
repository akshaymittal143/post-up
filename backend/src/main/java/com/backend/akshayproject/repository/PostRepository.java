package com.backend.akshayproject.repository;

import com.backend.akshayproject.model.Post;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long>{
}
