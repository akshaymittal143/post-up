import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../../model/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  @Input()
  postDetail;
  validMessage = '';
  constructor(private http: HttpClient, private postService: PostService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getPost(this.route.snapshot.params.id);
  }

  getPost(id: number) {
    this.postService.getPost(id).subscribe(
      data => {
        this.postDetail = data;
      },
      err => console.log(err),
      () => console.log('Post loaded: id ' + id)
    );
  }

  updatePost() {
    this.validMessage = 'your post has updated!';
    console.log('updatePost method!');
    this.postService.updatePost(this.postDetail);
  }
}
