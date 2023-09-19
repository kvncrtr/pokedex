import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, mergeMap, tap } from "rxjs";

@Injectable({
   providedIn: 'root'
})
export class PokemonService {
   allUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10272';
   twentyUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20';
   baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
   speciesUrl = 'https://pokeapi.co/api/v2/pokemon-species/';
   mainData: any;
   pokemons: any = [];

   constructor(
      private http: HttpClient
   ) {}

   
   getPokemonData(): Observable<any> {
      return this.http.get<any>(this.twentyUrl)
   }

   getNewPokemonData(number: number) {
      return this.http.get<any>(`${this.twentyUrl}&offset=${number}`)
   }
    
   getMorePokemonData(name: string): Observable<any> {
      return this.http.get<any>(`${this.baseUrl}${name}`)
   }

   getSpeciesData(name: string): Observable<any> {
      return this.http.get<any>(`${this.speciesUrl}${name}`)
   }
   
   getWeakness(url: string): Observable<any> {
      return this.http.get<any>(`${url}`)
   }

   getEvolution(url: string) {
      return this.http.get<any>(`${url}`)
   }   
}