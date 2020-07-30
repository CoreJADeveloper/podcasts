import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

// RELATED
import { PodcastsComponent } from './podcasts.component';
import { PodcastsService } from './podcasts.service';
import { WaveSurferComponent } from './components/wavesurfer/wavesurfer.component';

// MATERIAL
import { MatIconModule } from '@angular/material/icon';

// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		MatIconModule
	],
	declarations: [
		PodcastsComponent,
		WaveSurferComponent
	],
	exports: [
		PodcastsComponent,
		WaveSurferComponent
	],
  providers: [ PodcastsService, DatePipe ]
})
export class PodcastsModule { }
