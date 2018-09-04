package com.backend.akshayproject.controller;

import com.backend.akshayproject.model.Post;
import com.backend.akshayproject.repository.PostRepository;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;


@RestController
@RequestMapping(value = "/api/posts")
public class PostController {

  @Autowired
  private final PostRepository posts;

  public PostController(PostRepository posts) {
    this.posts = posts;
  }

  @GetMapping("")
  public Flux<Post> findAllPost() {
    return this.posts.findAll();
  }

  @PostMapping("")
  public Mono<Post> createPost(@RequestBody Post post) {
    return this.posts.save(post);
  }

  @GetMapping("/{id}")
  public Mono<Post> findPostById(@PathVariable("id") String id){
    return this.posts.findById(id);
  }

//  @PutMapping("/{id}")
//  public Mono<ResponseEntity<Post>> updatePostById(@PathVariable("id") String id,
//     @RequestBody Post post){
//    return this.posts.findById(id)
//        .flatMap(existingPost -> {
//          existingPost.setTitle(post.getTitle());
//          existingPost.setContent(post.getContent());
//          return this.posts.save(existingPost);
//            })
//        .map(updatePostById -> new ResponseEntity<>(updatePostById, HttpStatus.OK))
//        .defaultIfEmpty(new ResponseEntity<>(HttpStatus.NOT_FOUND));
//
//  }

  @DeleteMapping("/{id}")
  public Mono<Void> deleteById(@PathVariable("id") String id) {
    return this.posts.deleteById(id);
  }

}
