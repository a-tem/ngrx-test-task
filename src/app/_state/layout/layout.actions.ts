import { createAction, props } from "@ngrx/store";

export const setLayoutLoading = createAction(
  '[Layout] Set Loading'
);

export const setLayoutLoadingSuccess = createAction(
  '[Layout] Set Loading Success'
);

export const setLayoutLoadingFailed = createAction(
  '[Layout] Set Loading Failed'
);

export const setLayoutError = createAction(
  '[Layout] Set Error'
);
