import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../reducers/user.reducers';

const getUserState = createFeatureSelector<UserState>('user');

export const selectCustomTeams = createSelector(
   getUserState,
   (userState) => userState.User.customTeams
);