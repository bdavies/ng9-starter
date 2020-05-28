export enum ContentState {
  LOADING = 'Loading',
  LOADED = 'Loaded',
  ERROR = 'Error',
}

export interface ApiResponse<T> {
  state: ContentState;
  message?: string;
  result?: T;
}
