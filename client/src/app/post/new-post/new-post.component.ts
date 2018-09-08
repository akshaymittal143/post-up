import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewPostDialogComponent } from './new-post-dialog/new-post-dialog.component';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html'
})
export class NewPostComponent {
  content: string;
  title: string;
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(NewPostDialogComponent, {
      width: '250px',
      data: { title: this.title, content: this.content }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.title = result;
    });
  }
}
