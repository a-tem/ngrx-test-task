import { ActionReducerMap } from "@ngrx/store";

import * as fromUsers from './../modules/users/_store/users.reducer';
import * as fromLayout from './layout/layout.reducer';

export interface IAppState {
  layout: fromLayout.ILayoutState;
  users: fromUsers.IUsersState
}

export const reducers: ActionReducerMap<IAppState> = {
  layout: fromLayout.layoutReducer,
  users: fromUsers.usersReducer
};
