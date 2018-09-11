import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditPostComponent } from './edit-post/edit-post.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post.component';

const routes: Routes = [
  {
    path: '',
    component: PostComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: 'posts',
            component: PostListComponent
          },
          {
            path: 'new-post',
            component: NewPostComponent
          },
          {
            path: 'view-post/:id',
            component: PostDetailsComponent
          },
          {
            path: 'edit-post/:id',
            component: EditPostComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {}
