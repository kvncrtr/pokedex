import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pokemons: any[] =[];
  count = 0;
  previousPage = 0;
  currentPage = 0;
  nextPage = 20;
  
  constructor(
    private poke: PokemonService
    ) {}
    
    ngOnInit(): void {
      this.poke.getPokemonData().subscribe((res: any) => {
        res.results.forEach((results: any) => {
          this.poke.getMorePokemonData(results.name).subscribe(pokeData => {
            this.pokemons.push(pokeData)
          }
        )
      })
    })
  }

  pageEvents(event: PageEvent) {
    let index = event.pageIndex * 20
    this.poke.getNewPokemonData(index).subscribe((res: any) => {
      this.pokemons.splice(this.currentPage, 20)
      res.results.forEach((results: any) => {
        this.poke.getMorePokemonData(results.name).subscribe(pokeData => {
            this.pokemons.push(pokeData)
          }
        )
      })
    })    
  }
  
  back() {
    window.history.back()
  }
}
export class CustomPaginatorIntl extends MatPaginatorIntl {
  override itemsPerPageLabel: string = 'per page';
}
