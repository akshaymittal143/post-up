import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { validate } from 'codelyzer/walkerFactory/walkerFn';
import { Observable } from 'rxjs';
import { Post } from '../../../model/post';
import { PostService } from '../../post.service';
import { NewPostComponent } from '../new-post.component';

@Component({
  selector: 'app-new-post-dialog',
  templateUrl: './new-post-dialog.component.html'
})
export class NewPostDialogComponent implements OnInit {
  newPost: FormGroup;
  validMessage = '';

  constructor(
    public dialogRef: MatDialogRef<NewPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Post,
    private postService: PostService
  ) {}
  ngOnInit() {
    this.newPost = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required)
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addPost() {
    console.log('add post is trigged!');
    console.log(this.newPost.value);
    if (this.newPost.valid) {
      this.validMessage = 'your new post has submitted!!';
      this.postService.createPost(this.newPost.value).subscribe(
        data => {
          this.newPost.reset();
          return true;
        },
        error2 => {
          return Observable.throw(error2);
        }
      );
    } else {
      this.validMessage = 'Please fill out the form before submitting!!';
    }
  }
}
