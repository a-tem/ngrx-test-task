import { Action, createReducer } from "@ngrx/store";
import { immerOn } from "ngrx-immer/store";
import * as LayoutActions from './layout.actions';

export const layoutFeatureKey = 'layout';

export interface ILayoutState {
  error: boolean;
  loaded: boolean;
  loading: boolean
}

const initialState: ILayoutState = {
  error: false,
  loaded: false,
  loading: false
};

const reducer = createReducer(
  initialState,
  immerOn(LayoutActions.setLayoutLoadingSuccess, (state, action) => { state.loading = true; state.loaded = false }),
  immerOn(LayoutActions.setLayoutLoadingSuccess, (state, action) => { state.loading = false, state.loaded = true }),
  immerOn(LayoutActions.setLayoutLoadingSuccess, (state, action) => { state.loading = false, state.loaded = false }),
  immerOn(LayoutActions.setLayoutError, (state, action) => { state.error = true })
);

export function layoutReducer(state: ILayoutState | undefined, action: Action) {
  return reducer(state, action);
}
