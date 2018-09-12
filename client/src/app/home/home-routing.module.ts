import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditPostComponent } from '../post/edit-post/edit-post.component';
import { NewPostComponent } from '../post/new-post/new-post.component';
import { PostDetailsComponent } from '../post/post-details/post-details.component';
import { PostListComponent } from '../post/post-list/post-list.component';
import { PostComponent } from '../post/post.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  // {
  //   path: 'post',
  //   loadChildren: './post/post.module#PostModule'
  // }
  // {
  //   path: '',
  //   children: [
  //     {
  //       path: '',
  //       children: [
  //         {
  //           path: 'posts',
  //           component: PostListComponent
  //         },
  //         {
  //           path: 'new-post',
  //           component: NewPostComponent
  //         },
  //         {
  //           path: 'view-post/:id',
  //           component: PostDetailsComponent
  //         },
  //         {
  //           path: 'edit-post/:id',
  //           component: EditPostComponent
  //         }
  //       ]
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
