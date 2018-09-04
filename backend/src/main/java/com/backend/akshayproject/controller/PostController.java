package com.backend.akshayproject.controller;

import com.backend.akshayproject.model.Post;
import com.backend.akshayproject.repository.PostRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/posts")
public class PostController {

  @Autowired
  private PostRepository postRepository;

  @GetMapping
  public List<Post> list(){
    return postRepository.findAll();
  }

  @GetMapping("/{id}")
  public Optional<Post> get(@PathVariable("id") long id)
  {
    return postRepository.findById(id);
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public String create(@RequestBody Post bike){

    postRepository.save(bike);
    return "Sucessfully saved!!";
  }


}
