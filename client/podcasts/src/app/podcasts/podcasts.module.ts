import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// RELATED
import { PodcastsComponent } from './podcasts.component';
import { PodcastsService } from './podcasts.service';

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
		PodcastsComponent
	],
	exports: [
		PodcastsComponent
	],
  providers: [ PodcastsService ]
})
export class PodcastsModule { }
