import { createAction, props } from '@ngrx/store';
import { UserState } from '../reducers/user.reducers';

export const fetchUser = createAction('[Custom] Fetch User', 
props<{user: UserState['User']}>());

export const fetchUserSuccess = createAction(
   '[Custom Teams] Fetch User Success',
   props<{payload: any}>()
) 

export const saveTeams = createAction(
   '[Custom Teams] Save Teams',
   props<{payload: any}>()
)