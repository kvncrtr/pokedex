import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';
import { Observable, exhaustMap, map, of, switchMap, take, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { UserState } from '../store/reducers/user.reducers';
import { fetchUser } from '../store/actions/user.actions';

@Injectable({
   providedIn: 'root'
})
export class UserService {
   firebaseUrl = 'https://pokedex-9-18-2023-default-rtdb.firebaseio.com/Users/';
   json = '.json';
   uuid = this.storage.getData('uuid');

   constructor(
      private storage: StorageService,
      private store: Store<UserState>,
      private http: HttpClient   
   ) {};

   getUsers(): Observable<any> {
      return this.http.get<any>(`${this.firebaseUrl}${this.json}`)
   };

   getUser(): Observable<any> {
      return this.http.get<any>(`${this.firebaseUrl}${this.uuid}${this.json}`)
   };

   fetchTeam(id: number) {
      return this.http.get(`${this.firebaseUrl}${this.uuid}${this.json}`).pipe(
         tap((data) => {
            const clone = (Object.entries(data))
            clone.forEach((element: any) => {
               if (element[1][id].team) {
                  console.log(element[1][id])
               }
            })
         })
      )
   };

   getAllUsers(): Observable<any> {
      return this.http.get(`${this.firebaseUrl}${this.json}`).pipe(
         map((data) => {
            // const cloneData = 
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
            // use an object methods to take all the usernames.
            // reduce the usernames to just an array with the usernames
            // loop over the array to see if the username submited is present
            // if present then make tha form invalid 
            // if not present then push the username to another function that post the submitted information
            
         })
      );
   }
}