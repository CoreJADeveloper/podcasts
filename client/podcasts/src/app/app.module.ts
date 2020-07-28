import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from './store/store.module';

import { PodcastsAPIActions } from './podcasts/podcasts.actions';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule
  ],
  providers: [ PodcastsAPIActions ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
