import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent implements OnInit, OnDestroy {
  navigationSubscription;

  constructor(private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.intialiseInvites();
      }
    });
  }

  intialiseInvites() {
    //defailts
  }

  ngOnInit() {}

  ngOnDestroy() {}
}
