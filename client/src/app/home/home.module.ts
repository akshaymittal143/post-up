import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovalentLayoutModule, CovalentStepsModule } from '@covalent/core';
import { PostComponent } from '../post/post.component';
import { PostModule } from '../post/post.module';
import { MaterialModule } from '../shared/material.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PageNonfoundComponent } from './page-nonfound/page-nonfound.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [CommonModule, MaterialModule, CovalentLayoutModule, CovalentStepsModule, HomeRoutingModule],
  declarations: [HomeComponent, PageNonfoundComponent, MainComponent],
  exports: [HomeComponent, PageNonfoundComponent]
})
export class HomeModule {}
