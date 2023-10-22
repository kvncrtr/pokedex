import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { UserState } from '../store/reducers/user.reducers';

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
   } 
   
   postNewUser(username: any, password: any): Observable<any> {
      const body = {
         username: username,
         password: password,
         customTeams: {
            "0": {
               "teamName": "silver",
               "team": {
                  "0": "stonjourner",
                  "1": "gilmmora",
                  "2": "volcarona",
                  "3": "victreebel",
                  "4": "wormadam",
                  "5": "iron jugulis"
               }
            }
         },
         profile: {"settings": "new user"},
         email: "newuser@gmail.com"
      }

      return this.http.post(`${this.firebaseUrl}${this.json}`, body);
   }
}