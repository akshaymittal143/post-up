import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovalentLayoutModule, CovalentNotificationsModule, CovalentStepsModule } from '@covalent/core';
import { CovalentSearchModule } from '@covalent/core/search';
import { MaterialModule } from '../shared/material.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PageNonfoundComponent } from './page-nonfound/page-nonfound.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentNotificationsModule,
    CovalentSearchModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, PageNonfoundComponent, MainComponent],
  exports: [HomeComponent, PageNonfoundComponent]
})
export class HomeModule {}
