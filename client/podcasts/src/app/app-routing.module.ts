import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PodcastsComponent } from './podcasts/podcasts.component';

const routes: Routes = [
  {
    path: '',
    component: PodcastsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
