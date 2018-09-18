import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  CovalentLayoutModule,
  CovalentNotificationsModule,
  CovalentSearchModule,
  CovalentStepsModule
} from '@covalent/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostModule } from './post/post.module';

import { MaterialModule } from './shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PostModule,
    HomeModule,
    MaterialModule,
    FlexLayoutModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentNotificationsModule,
    AppRoutingModule
  ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
