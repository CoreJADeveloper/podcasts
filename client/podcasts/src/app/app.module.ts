import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// MATERIAL
import { MatToolbarModule } from '@angular/material/toolbar';

// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducers } from './shared/redux/app.reducer';
import { PodcastEffects } from './podcast/effects/podcast.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreDevtoolsModule.instrument({
      name: 'podcast App'
    }),
    StoreModule.forRoot(appReducers, {}),
    EffectsModule.forRoot([PodcastEffects]),
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
