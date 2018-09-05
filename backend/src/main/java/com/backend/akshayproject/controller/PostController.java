package com.backend.akshayproject.controller;

import com.backend.akshayproject.exception.PostIdMismatchException;
import com.backend.akshayproject.exception.PostNotFoundException;
import com.backend.akshayproject.model.Post;
import com.backend.akshayproject.repository.PostRepository;
import java.util.List;
import java.util.Optional;
import javafx.geometry.Pos;
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
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/posts")
public class PostController {

  @Autowired
  private PostRepository postRepository;

  @GetMapping
  public List<Post> list() {
    System.out.println("Get all Posts...");
    return postRepository.findAll();
  }

  @GetMapping("/{id}")
  public Optional<Post> get(@PathVariable("id") long id) {
    return postRepository.findById(id);
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public Post create(@RequestBody Post post) {

    Post _post = postRepository.save(new Post(post.getId(),post.getTitle(), post.getContent()));
    return _post;
  }

  @PutMapping("/{id}")
  public ResponseEntity<Post> updatePost(@PathVariable("id") long id, @RequestBody Post post) {

    System.out.println("Update Post with ID = " + id + "...");
    Optional<Post> p = postRepository.findById(id);

    if(p.isPresent()) {
      Post _post = p.get();
      _post.setTitle(post.getTitle());
      _post.setContent(post.getContent());
      return new ResponseEntity(postRepository.save(_post), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<String> deletePost(@PathVariable("id") long id){
    System.out.println("Delete Post with ID = " + id + "...");

    postRepository.deleteById(id);
    return new ResponseEntity<>("Post has been deleted!!", HttpStatus.OK);
  }

  @DeleteMapping("/delete")
  public ResponseEntity<String> deleteAllPost(){
    System.out.println("Delete All Posts...");

    postRepository.deleteAll();
    return new ResponseEntity<>("All posts have been deleted!!", HttpStatus.OK);
  }

}
