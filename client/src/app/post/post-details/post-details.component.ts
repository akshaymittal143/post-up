import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../model/post';
import { PostService } from '../post.service';
import { PostListComponent } from '../post-list/post-list.component';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  @Input() post: Post;
  constructor(private postService: PostService,
  private listComponent: PostListComponent) { }

  ngOnInit() {
  }

}
