import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
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
    private postService: PostService,
    private router: Router
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

  reloadPage() {
    this.router.navigateByUrl('/posts');
    console.log('post list page reloaded!!');
  }

  addPost() {
    console.log('add post is added!');
    console.log(this.newPost.value);
    if (this.newPost.valid) {
      this.validMessage = 'your new post has submitted!!';
      this.postService.createPost(this.newPost.value).subscribe(
        data => {
          this.newPost.reset();
          if (data) {
            this.dialogRef.afterClosed().subscribe(() => {
              console.log('post was addded!');
              this.reloadPage();
            });
          }
          return true;
        },
        err => console.log(err)
      );
    } else {
      this.validMessage = 'Please fill out the form before submitting!!';
    }
  }
}
