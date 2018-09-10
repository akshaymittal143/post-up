import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditPostComponent } from './post/edit-post/edit-post.component';
import { NewPostComponent } from './post/new-post/new-post.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { HomeComponent } from './home/home.component';
import { PageNonfoundComponent } from './home/page-nonfound/page-nonfound.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'posts',
    component: PostListComponent
  },
  {
    path: 'view-post/:id',
    component: PostDetailsComponent
  },
  {
    path: 'edit-post/:id',
    component: EditPostComponent
  },
  {
    path: '**',
    component: PageNonfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
