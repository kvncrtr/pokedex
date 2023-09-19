import { Component, OnInit } from '@angular/core';
import { PokemonService } from './shared/services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pokemons: any[] =[];
  count = 0;
  
  constructor(
    private poke: PokemonService
  ) {}
}
