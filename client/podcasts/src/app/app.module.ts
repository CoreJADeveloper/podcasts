import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from './store/store.module';

// MODULES
import { PodcastsModule } from './podcasts/podcasts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule,
    PodcastsModule
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
