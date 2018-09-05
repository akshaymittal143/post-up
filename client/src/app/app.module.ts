import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './post/post.service';
import { PostRoutingModule } from './post/post-routing.module';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostModule } from './post/post.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, PostRoutingModule, HttpClientModule, PostModule],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {}
