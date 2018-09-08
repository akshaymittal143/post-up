import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Post } from '../../../model/post';
import { PostService } from '../../post.service';
import { NewPostComponent } from '../new-post.component';

@Component({
  selector: 'app-new-post-dialog',
  templateUrl: './new-post-dialog.component.html'
})
export class NewPostDialogComponent {
  newPost: Post;
  constructor(
    public dialogRef: MatDialogRef<NewPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Post,
    private postService: PostService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  addPost() {
    console.log('addPost() method is trigged!!');
    this.newPost.title = this.data.title;
    this.newPost.content = this.data.content;
    this.postService.createPost(this.newPost);
  }
}
