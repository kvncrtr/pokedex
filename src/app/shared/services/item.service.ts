import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
   providedIn: 'root'
})
export class ItemService {
   itemUrl = 'https://pokeapi.co/api/v2/item/';

   constructor(
      private http:HttpClient
   ) {}
   
   getItemData() {
      return this.http.get(`${this.itemUrl}`)
   }

   getNewItemData(number: number) {
      return this.http.get<any>(`${this.itemUrl}?&offset=${number}&limit=20`)
   }
   
   getMoreItemData(name: string): Observable<any> {
      return this.http.get<any>(`${this.itemUrl}${name}`)
   }
}