import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from '../auth/service/auth-guard';
import { PodcastComponent } from './containers/podcast/podcast.component';

const routes: Routes = [
    {
        path: '',
        component: PodcastComponent
    },
];

export const PodcastRoutes = RouterModule.forChild(routes);
