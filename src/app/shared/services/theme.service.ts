import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
   providedIn: 'root'
})
export class ThemeService {
   constructor(
      private storage: StorageService
   ) {}

   setPreference() {
      return this.storage.getData('mode')
   }
}