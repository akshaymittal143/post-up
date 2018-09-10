import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../model/post';
import { PostService } from '../post.service';
import { PostListComponent } from '../post-list/post-list.component';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  public postDetail;

  // @Input() post: Post;
  constructor(private postService: PostService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getPost(this.route.snapshot.params.id);
  }

  getPost(id: number) {
    this.postService.getPost(id).subscribe(
      data => {
        this.postDetail = data;
      },
      err => console.log(err),
      () => console.log('Post loaded: id' + id)
    );
  }
}
