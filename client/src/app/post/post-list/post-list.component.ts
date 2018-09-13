import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  public posts;
  constructor(private postService: PostService, private router: Router) {}

  ngOnInit() {
    this.getPosts();
  }

  reloadPage() {
    // if (this.router.onSameUrlNavigation) {
    //   this.ngOnInit();
    //   console.log('reloading the page!!');
    // }
    this.router.navigateByUrl('/posts');
  }

  getPosts() {
    this.postService
      .getPosts()
      .subscribe(data => (this.posts = data), err => console.error(err), () => console.log('Posts loaded!!!'));
  }

  deletePost(id: number) {
    console.log('post to be deleted:' + id);
    this.postService.deletePost(id);
    this.reloadPage();

    // this.reloadPage();
  }
}
