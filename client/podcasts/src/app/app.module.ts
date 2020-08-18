import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { StoreModule } from './store/store.module';

// MODULES
// import { PodcastsModule } from './podcasts/podcasts.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';

// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducers } from './shared/redux/app.reducer';
import { PodcastEffects } from './podcast/effects/podcast.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // StoreModule,
    // PodcastsModule,
    StoreModule.forRoot(appReducers, {}),
    EffectsModule.forRoot([PodcastEffects]),
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
