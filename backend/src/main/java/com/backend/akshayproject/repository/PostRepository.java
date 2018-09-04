package com.backend.akshayproject.repository;

import com.backend.akshayproject.model.Post;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface PostRepository extends ReactiveMongoRepository<Post, String> {
}
