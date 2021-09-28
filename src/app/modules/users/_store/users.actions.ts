import { createAction, props } from "@ngrx/store";
import { IUser } from "src/app/models";

export const fetchUsers = createAction(
  '[Users] Fetch Users List'
);

export const fetchUsersFailed = createAction(
  '[Users] Fetching Users List Failed',
  props<{ error: string }>()
);

export const setUsers = createAction(
  '[Users] Set Users List',
  props<{ usersList: IUser[] }>()
);

export const selectUser = createAction(
  '[Users] Select Single User',
  props<{ userId: number }>()
);

export const getUser = createAction(
  '[Users] Get User Info',
  props<{ userId: string }>()
);

export const fetchSingleUser = createAction(
  '[Users] Fetch Single User',
  props<{ userId: number }>()
);

export const fetchSingleUserSuccess = createAction(
  '[Users] Fetch Single User Success',
  props<{ user: IUser }>()
);

export const fetchSingleUserFailed = createAction(
  '[Users] Fetch Single User Failed'
);

export const setSelectedUser = createAction(
  '[Users] Set Selected User',
  props<{ user: IUser }>()
);
