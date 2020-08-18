import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PodcastModule } from './podcast/podcast.module';

const routes: Routes = [
  // {
  //   path: '',
  //   component: PodcastsComponent
  // },
  {
    path: '',
    loadChildren: () => import('./podcast/podcast.module')
        .then(mod => mod.PodcastModule)
  },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
export const AppRoutingModule = RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled'
});
