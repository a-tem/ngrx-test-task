import { Action, createReducer, on } from "@ngrx/store";
import { immerOn } from 'ngrx-immer/store';
import { IUser } from "src/app/models";
import * as UsersActions from './users.actions';

export const usersFeatureKey = 'users';

export interface IUsersState {
  usersList: IUser[],
  selectedUserId: null | number
}

export const initialState: IUsersState = {
  usersList: [],
  selectedUserId: null
};

const reducer = createReducer(
  initialState,
  immerOn(UsersActions.setUsers, (state, { usersList }) => { state.usersList = usersList }),
  immerOn(UsersActions.selectUser, (state, { userId }) => { state.selectedUserId = userId }),
  immerOn(UsersActions.setSelectedUser, (state, { user }) => {
    if (!state.usersList.find(u => u.id === user.id)) {
      state.usersList.push(user);
    }
    state.selectedUserId = user.id
  })
);

export function usersReducer(state: IUsersState | undefined, action: Action) {
  return reducer(state, action);
}
