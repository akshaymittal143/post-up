import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PageNonfoundComponent } from './page-nonfound/page-nonfound.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [HomeComponent, PageNonfoundComponent],
  exports: [HomeComponent, PageNonfoundComponent]
})
export class HomeModule {}
