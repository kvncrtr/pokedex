import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, mergeMap, tap } from "rxjs";

@Injectable({
   providedIn: 'root'
})
export class RegionsService {
   regionsUrl = 'https://pokeapi.co/api/v2/region';
   genUrl = 'https://pokeapi.co/api/v2/generation'

   constructor(
      private http: HttpClient
   ) {}

   getRegionsData() {
      return this.http.get(`${this.regionsUrl}`)
   }

   getRegionsMoreData(name: string) {
      return this.http.get(`${this.regionsUrl}/${name}`)
   }

   getDexData(url: string) {
      return this.http.get(`${url}`)
   }
}