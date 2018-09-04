package com.backend.akshayproject.service;

import com.backend.akshayproject.model.Post;
import com.backend.akshayproject.repository.PostRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;

@Component
@Slf4j
public class DataIntializer implements CommandLineRunner {

  private final PostRepository posts;

  public DataIntializer(PostRepository posts) {
    this.posts = posts;
  }

  @Override
  public void run(String[] args) {
//    log.info("start post data initialization  ...");
    this.posts
        .deleteAll()
        .thenMany(
            Flux
                .just("Post one", "Post two")
                .flatMap(
                    title -> this.posts.save(Post.builder().title(title).content("content of " + title).build())
                )
        )
        .log()
        .subscribe(
            null,
            null,
            () -> log.info("done post initialization...")
        );
  }
}
