import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import * as LayoutActions from './layout.actions';

@Injectable()
export class LayoutEffects {
  setLayoutLoaded$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LayoutActions.setLayoutLoading),
      map(() => LayoutActions.setLayoutLoadingSuccess(),
      catchError((error) => of(LayoutActions.setLayoutLoadingFailed()))
    )
  ));

  constructor(private actions$: Actions) {
  }
}
