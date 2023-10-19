import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { UserState } from '../store/reducers/user.reducers';
// import { fetchUser } from '../store/actions/user.actions';

@Injectable({
   providedIn: 'root'
})
export class UserService {
   firebaseUrl = 'https://pokedex-8e1a6-default-rtdb.firebaseio.com/Users/';
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

   fetchTeam(id: number): Observable<any> {
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

   checkUsernameVacancy(): Observable<any> {
      return this.http.get(`${this.firebaseUrl}${this.json}`).pipe(
         map((data) => {
            const cloneData = Object.values(data);
            const allUsers = cloneData.reduce((acc, cur)=> {
               acc.push(cur.username);
               return acc
            }, []);
            return allUsers;
         })
      );
   };
   
   postNewUser(username: string, password: string): Observable<any> {
      // grab post request and create a header to submit in with the post request
      const body = {
         // set a default custom team to then profile
         customTeams: {
            "0": {
               "teamName": "prime",
               "team": {
                  "0": "arceus",
                  "1": "mewtwo",
                  "2": "giratina",
                  "3": "dialga",
                  "4": "palkia",
                  "5": "rayquaza"
               }
            }
         },
         email: "",
         username: username,
         password: password,
      };
      return this.http.post(`${this.firebaseUrl}${this.json}`, body).pipe(
         // grab the uuid that was populated from firebase and include it in the header
         tap((data) => {
            this.postUuidKey(Object.values(data)[0], body)
         })
      );
   };
   
   postUuidKey(uuid: string, body: any): Observable<any> {
      console.log(uuid, body);
      const bodyOverride = {
         uuid: uuid
      }
      return this.http.patch(`${this.firebaseUrl}${uuid}${this.json}`, bodyOverride);
   };
   
}