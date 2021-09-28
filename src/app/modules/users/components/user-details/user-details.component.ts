import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { iif, Observable, of } from "rxjs";
import { mergeMap, tap } from "rxjs/operators";
import { IUser } from "src/app/models";

import * as fromUsers from "../../_store";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.html',
  styleUrls: ['./user-details.scss']
})
export class UserDetailsComponent implements OnInit { 
  selectedUser$: Observable< IUser | null | undefined > = of(null);

  constructor(
    private state: Store<fromUsers.IUsersState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.selectedUser$ = this.state
      .select(fromUsers.selectedUserId)
      .pipe(
        mergeMap(userId => iif(() => !!userId,
            this.state.select(fromUsers.getSelectedUser),
            of(null).pipe(
              tap(() => this.state.dispatch(
                // TODO: RouterStore will help to avoid fething params from route
                fromUsers.fetchSingleUser({ userId: +<string>this.route.snapshot.paramMap.get('id')}) 
              ))
            )
          )
        )
      );
  }

  parseTags(tags: string): string[] {
    return tags.length ? tags.split(' ') : [];
  }
}
