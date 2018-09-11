import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditPostComponent } from './post/edit-post/edit-post.component';
import { NewPostComponent } from './post/new-post/new-post.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { HomeComponent } from './home/home.component';
import { PageNonfoundComponent } from './home/page-nonfound/page-nonfound.component';
import { PostComponent } from './post/post.component';
import { PostModule } from './post/post.module';

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
    path: 'post',
    loadChildren: './post/post.module#PostModule'
  },
  {
    path: '**',
    component: PageNonfoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
