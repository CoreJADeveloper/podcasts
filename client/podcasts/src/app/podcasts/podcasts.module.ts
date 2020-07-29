import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// RELATED
import { PodcastsComponent } from './podcasts.component';
import { PodcastsService } from './podcasts.service';

// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
	imports: [
		CommonModule,
		RouterModule
	],
	declarations: [
		PodcastsComponent
	],
	exports: [
		PodcastsComponent
	],
  providers: [ PodcastsService ]
})
export class PodcastsModule { }
