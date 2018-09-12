import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  public posts;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService
      .getPosts()
      .subscribe(data => (this.posts = data), err => console.error(err), () => console.log('Posts loaded!!!'));
  }

  deletePost(id: number) {
    console.log('post to be deleted:' + id);
    this.postService.deletePost(id);
    this.getPosts();
  }
}
