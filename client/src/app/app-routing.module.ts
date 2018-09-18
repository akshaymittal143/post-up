import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './home/main/main.component';
import { PageNonfoundComponent } from './home/page-nonfound/page-nonfound.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainComponent
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
      routes
      // { onSameUrlNavigation: 'reload' } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
