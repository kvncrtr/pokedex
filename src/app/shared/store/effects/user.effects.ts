import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { exhaustMap, map, switchMap, tap } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { StorageService } from "../../services/storage.service";
import { UserState } from "../reducers/user.reducers";
import { fetchUser, fetchUserSuccess } from "../actions/user.actions";

@Injectable({ providedIn: 'root' })
export class userEffect {
   firebaseUrl = 'https://pokedex-9-18-2023-default-rtdb.firebaseio.com/Users/';
   json = '.json';
   user: any;
   uuid = this.storage.getData('uuid');
   
   constructor(
      private actions$: Actions,
      private http: HttpClient,
      private storage: StorageService,
      private store: Store<UserState>
   ) {}
   
}