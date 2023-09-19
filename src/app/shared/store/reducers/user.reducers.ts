import { createReducer, on } from '@ngrx/store';
import { fetchUser, saveTeams } from '../actions/user.actions';

export interface Team {
   team: string[];
   teamName: string;
}

export interface UserState {
   User: {
      username: string;
      uuid: string;
      password: string;
      email: string;
      customTeams: {
      [key: string]: {
         teamName: string;
         team: {
            [key: number]: string;
         };
      };
      };
      profile: {
      teamCount: number;
      avi: string;
      followers: string;
      following: [];
      gender: string;
      isDark: boolean;
      };
   }
 }

 const initialState: UserState = {
   User: {
      username: '',
      uuid: '',
      password: '',
      email: '',
      customTeams: {
         '': {
            teamName: '',
            team: {
               0: '',
            }
         }
      },
      profile: {
         teamCount: 0,
         avi: '',
         followers: '',
         following: [],
         gender: '',
         isDark: false
      }
   }
 }

 export const userReducer = createReducer(
   initialState, 
   on(fetchUser, (state, action) => {
      return {
         User: action.user
      }
   }),
   on(saveTeams, (state, action) => {
      return {
         ...state,
         User: {
            ...state.User,
            customTeams: action.payload
         }
      }
   })
)