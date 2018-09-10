import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  public posts;

  constructor(private postService: PostService, private vcr: ViewContainerRef) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService
      .getPosts()
      .subscribe(data => (this.posts = data), err => console.error(err), () => console.log('Posts loaded!!!'));
  }

  addPost() {}
}
