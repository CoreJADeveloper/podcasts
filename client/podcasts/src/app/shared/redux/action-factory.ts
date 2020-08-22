import { Action } from '@ngrx/store';

export class ActionTemplate<T> implements Action {
  readonly type: any;
  readonly payload: T;

  constructor(type: any, payload: T) {
    this.type = type;
    this.payload = payload;
  }
}

export class ActionFactory<T> {
  create<U>(type: T, payload: U) {
    return new ActionTemplate<U>(type, payload);
  }
}

export interface ErrorAction {
  error: string;
}
