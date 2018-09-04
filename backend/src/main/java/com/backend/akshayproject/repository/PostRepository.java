package com.backend.akshayproject.repository;

import com.backend.akshayproject.model.Post;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

interface PostRepository extends ReactiveMongoRepository<Post, String> {

}
