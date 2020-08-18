import { ActionFactory, ActionTemplate, ErrorAction } from '../../shared/redux/action-factory';
import { Podcast } from '../model/podcast.model';

export enum PodcastActionTypes {
    LIST_PODCASTS = '[PODCAST] LIST PODCASTS',
    LIST_PODCASTS_SUCCESS = '[PODCAST] LIST PODCASTS SUCCESS',
    LIST_PODCASTS_FAILURE = '[PODCAST] LIST PODCASTS FAILURE',

    INIT_LIST_PODCASTS = '[PODCAST] INIT LIST PODCASTS',
}

export interface DefaultPodcast {
    podcast: Podcast;
}

export interface ListPodcastsSuccess {
    featured: Array<Podcast>;
    trending: Array<Podcast>;
    highlighted: Array<Podcast>;
    favorite: Array<Podcast>;
}

export interface ListPodcasts {
    keyword?: string;
    skip: number;
}


export let podcastActionFactory = new ActionFactory<PodcastActionTypes>();

export type All =
    & ActionTemplate<ListPodcastsSuccess>
    & ActionTemplate<ListPodcasts>
    & ActionTemplate<DefaultPodcast>
    & ActionTemplate<ErrorAction>;
