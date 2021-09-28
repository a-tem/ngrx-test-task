import { Component, OnInit } from "@angular/core";

import { Store } from "@ngrx/store";
import { iif, Observable, of } from "rxjs";
import { mergeMap, tap } from "rxjs/operators";

import { IUser } from "src/app/models";
import * as fromUsers from '../../_store';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.html',
  styleUrls: ['./users-list.scss']
})
export class UsersListComponent implements OnInit {
  usersList$: Observable<IUser[] | null | undefined> = of(null);

  constructor(private state: Store<fromUsers.IUsersState>) {}

  ngOnInit() {
    this.usersList$ = this.state
      .select(fromUsers.selectUsersList)
      .pipe(
        mergeMap(usersList => iif(() => usersList.length > 1,
            this.state.select(fromUsers.selectUsersList),
            of(null).pipe(
              tap(() => this.state.dispatch(fromUsers.fetchUsers()))
            )
          )
        )
      );
  }

  onSelectUser(userId: number) {
    this.state.dispatch(fromUsers.selectUser({ userId }));
  }
}
