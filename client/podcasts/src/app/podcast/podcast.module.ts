import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

// RELATED
import { PodcastComponent } from './containers/podcast/podcast.component';
import { PodcastService } from './service/podcast.service';
import { WaveSurferComponent } from './components/wavesurfer/wavesurfer.component';

// MATERIAL
import { MatIconModule } from '@angular/material/icon';

import { StoreModule } from '@ngrx/store';
import { podcastReducer } from './reducers/podcast.reducer';
import { PodcastRoutes } from './podcast.routing';

// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
	imports: [
		CommonModule,
		PodcastRoutes,
		StoreModule.forFeature('podcast', podcastReducer),
		MatIconModule
	],
	declarations: [
		PodcastComponent,
		WaveSurferComponent
	],
	exports: [
		PodcastComponent,
		WaveSurferComponent
	],
  providers: [ PodcastService, DatePipe ]
})
export class PodcastModule { }
