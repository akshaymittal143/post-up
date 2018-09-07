import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component';
import { NewPostComponent } from './new-post/new-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { SearchPostComponent } from './search-post/search-post.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  imports: [CommonModule, MaterialModule, PostRoutingModule],
  declarations: [
    PostListComponent,
    PostFormComponent,
    NewPostComponent,
    EditPostComponent,
    PostDetailsComponent,
    SearchPostComponent
  ],
  exports: [
    PostListComponent,
    PostFormComponent,
    NewPostComponent,
    EditPostComponent,
    PostDetailsComponent,
    SearchPostComponent
  ]
})
export class PostModule {}
