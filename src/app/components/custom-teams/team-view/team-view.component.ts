import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, forkJoin, map, mergeMap, switchMap, tap } from 'rxjs';
import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { UserService } from 'src/app/shared/services/user.service';
import { saveTeams } from 'src/app/shared/store/actions/user.actions';
import { UserState } from 'src/app/shared/store/reducers/user.reducers';
import { selectCustomTeams } from 'src/app/shared/store/selectors/user.selectors';

interface TeamData {
  name: string;
  data: any[]; 
}

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.css']
})
export class TeamViewComponent implements OnInit {

  
  teams$!: Observable<any>;
  myTeamData: any;
  userUuid = this.storage.getData('uuid');

  constructor(
    private user: UserService,
    private poke: PokemonService,
    private storage: StorageService,
    private store: Store<{user: UserState}>,
    private router: Router) {}

  ngOnInit() {
    this.teams$ = this.store.pipe(
      select(selectCustomTeams),
      switchMap(teams => {
        const allRequest = Object.values(teams).map(element => {
          const pokemonRequest = Object.values(element.team).map(
            name => this.poke.getMorePokemonData(name));
          return forkJoin(pokemonRequest);
        })
        return forkJoin(allRequest).pipe(
          tap(data => {
            this.myTeamData = data.reduce((p: TeamData[], c: any, i: number) => {
              if (c.length > 1) {
                const name = teams[i].teamName;
                const data = c;
                p.push({ name, data });
              }
              return p;
            }, [])
          })
        );
      })
    )
  }
}