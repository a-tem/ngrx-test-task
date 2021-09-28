import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IUsersState, usersFeatureKey } from "./users.reducer";

const usersFeatureSelector = createFeatureSelector<IUsersState>(usersFeatureKey);

export const selectUsersList = createSelector(usersFeatureSelector, (state: IUsersState) => state.usersList);
export const selectedUserId = createSelector(usersFeatureSelector, (state: IUsersState) => state.selectedUserId);

export const getSelectedUser = createSelector(
  selectUsersList,
  selectedUserId,
  (usersList, selectedUserId) => {
    if (usersList.length && selectedUserId) {
      return usersList.find(user => user.id === selectedUserId);
    }
    return null;
  }
)
