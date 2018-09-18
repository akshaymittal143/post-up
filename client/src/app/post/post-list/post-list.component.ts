import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DeletePostComponent } from '../delete-post/delete-post.component';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  public posts;

  constructor(
    private postService: PostService,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getPosts();
  }

  reloadPage() {
    this.router.navigateByUrl('/posts');
    console.log(this.route.url);
  }

  getPosts() {
    this.postService
      .getPosts()
      .subscribe(data => (this.posts = data), err => console.error(err), () => console.log('Posts loaded!!!'));
  }

  deletePost(id: number) {
    const dialogRef = this.dialog.open(DeletePostComponent);
    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          this.postService.deletePost(id);
          console.log('post to be deleted:' + id);
          this.reloadPage();
        }
      },
      err => console.log('error while deleting' + err)
    );
  }
}
