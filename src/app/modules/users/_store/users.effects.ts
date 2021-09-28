import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { of } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';

import { UsersService } from "../services";
import * as UsersActions from './users.actions';

@Injectable()
export class UsersEffects {
  fetchUsersList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.fetchUsers),
      switchMap(() => this.usersService.getUsersList().pipe(
        map(usersList => UsersActions.setUsers({ usersList }))
      )),
      catchError((error) => of(UsersActions.fetchUsersFailed({ error })))
    )
  );

  selectSingleUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.selectUser),
      tap(({ userId }) => this.router.navigateByUrl(`/users/user/${ userId }`))
    ), { dispatch: false }
  );

  fetchSingleUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.fetchSingleUser),
      switchMap(({ userId }) => this.usersService.getUserById(userId)),
      map(user => UsersActions.setSelectedUser({ user }))
    )
  )

  constructor(
    private actions$: Actions,
    private usersService: UsersService,
    private router: Router
  ) {
  }
}
