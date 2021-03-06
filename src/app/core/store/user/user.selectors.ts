import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IAppState} from '../App/App.state';
import {IUserState} from './user.state';

const usersState = (state: IAppState) => state.users;

export const selectUsers = createFeatureSelector<IAppState>('users');

export const selectUserList = createSelector(
  usersState,
  (state: IUserState) => state.users,
);

export const selectSelectedUser = createSelector(
  usersState,
  (state: IUserState) => state.selectedUser,
);
