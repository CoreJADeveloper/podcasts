export interface PodcastState {
  list: object;
  isLoading: boolean;
  isListLoading: boolean;
}

export const initialState: PodcastState = {
  list: {},
  isLoading: false,
  isListLoading: false
};
