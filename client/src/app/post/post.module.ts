import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewPostDialogComponent } from './new-post/new-post-dialog/new-post-dialog.component';

import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component';
import { NewPostComponent } from './new-post/new-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostService } from './post.service';
import { SearchPostComponent } from './search-post/search-post.component';
import { MaterialModule } from '../shared/material.module';
import { PostComponent } from './post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';

@NgModule({
  imports: [CommonModule, PostRoutingModule, MaterialModule, FormsModule, ReactiveFormsModule],
  entryComponents: [NewPostComponent, NewPostDialogComponent, DeletePostComponent],
  declarations: [
    PostComponent,
    PostListComponent,
    PostFormComponent,
    NewPostComponent,
    NewPostDialogComponent,
    EditPostComponent,
    PostDetailsComponent,
    SearchPostComponent,
    DeletePostComponent
  ],
  exports: [
    PostComponent,
    PostListComponent,
    PostFormComponent,
    NewPostComponent,
    NewPostDialogComponent,
    EditPostComponent,
    PostDetailsComponent,
    SearchPostComponent,
    DeletePostComponent
  ],
  providers: [PostService]
})
export class PostModule {}
