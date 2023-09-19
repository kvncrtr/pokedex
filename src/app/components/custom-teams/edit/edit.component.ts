import { Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { UserService } from 'src/app/shared/services/user.service';
import { UserState } from 'src/app/shared/store/reducers/user.reducers';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  currentTeam: any;
  pokemons: any[] =[];
  count = 0;
  previousPage = 0;
  currentPage = 0;
  nextPage = 20;
  userUuid = this.storage.getData('uuid');
  currentUser: any;
  team: any;

  constructor(
    private user: UserService,
    private storage: StorageService,
    private poke: PokemonService,
    private store: Store<UserState>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.team = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }

    this.callTeam(this.team.id)
    /* 
    this.poke.getPokemonData().subscribe((res: any) => {
      res.results.forEach((results: any) => {
        this.poke.getMorePokemonData(results.name).subscribe(pokeData => {
          this.pokemons.push(pokeData)
        }
        )
      })
    })
    
    this.user.getUsers().subscribe(data => {
      let clone = Object.entries(data)
      for(let [key, value] of clone) {
        this.userUuid == key ? this.currentUser = value : null
        this.currentUser = value
        this.currentUser.customTeams.length > 1 ? this.teams = this.currentUser.customTeams 
        : this.router.navigate(['/custom/empty'])
        console.log(this.teams)
      }
    })
    */ 
  }

  callTeam(id: number) {
    this.user.fetchTeam(id).subscribe()
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


    /*
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
  */
}
