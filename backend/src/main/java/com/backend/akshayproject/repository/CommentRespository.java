package com.backend.akshayproject.repository;

import com.backend.akshayproject.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRespository extends JpaRepository<Comment, Long> {

}
