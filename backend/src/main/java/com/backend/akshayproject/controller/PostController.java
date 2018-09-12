package com.backend.akshayproject.controller;

import com.backend.akshayproject.model.Post;
import com.backend.akshayproject.repository.PostRepository;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin(value = "*", maxAge = 3600)
public class PostController {

  @Autowired
  private PostRepository postRepository;

  @GetMapping
  public List<Post> list() {
    System.out.println("Get all Posts...");
    return postRepository.findAll();
  }

  @GetMapping("/{id}")
  public ResponseEntity<Post> get(@PathVariable("id") long id) {
    try {
      return new ResponseEntity(postRepository.findById(id), HttpStatus.OK);
    } catch (Exception e) {
      e.printStackTrace();
      return new ResponseEntity(HttpStatus.NOT_FOUND);
    }
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public Post create(@RequestBody @Valid Post post) {
    return postRepository.save(post);
  }

  @PutMapping("/{id}")
  public ResponseEntity updatePost(@PathVariable("id") long id,
      @RequestBody @Valid Post post) {

    System.out.println("Update Post with ID = " + id + "...");
    return postRepository.findById(id)
        .map(p -> {
          p.setContent(post.getContent());
          p.setTitle(post.getTitle());
          return new ResponseEntity(postRepository.save(p), HttpStatus.OK);
        }).orElse(new ResponseEntity(HttpStatus.NOT_FOUND));
  }

  @DeleteMapping("/{id}")
  public String deletePost(@PathVariable("id") long id) {
    System.out.println("Delete Post with ID = " + id + "...");
    postRepository.deleteById(id);
    return "Post has been deleted!!";
  }
}
