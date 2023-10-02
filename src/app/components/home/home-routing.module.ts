import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

import { ItemsComponent } from './items/items.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { RegionsComponent } from './regions/regions.component';
import { PokeSpecsComponent } from 'src/app/shared/shared/poke-specs/poke-specs.component';
import { ItemComponent } from './items/item/item.component';
import { OtherTeamsComponent } from '../other-teams/other-teams.component';
import { ProfileComponent } from '../profile/profile.component';
import { AuthGuard } from 'src/app/shared/auth/auth.guard';

const routes: Routes = [
   {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component:PokemonComponent
      },
      {
        path: 'specs',
        component: PokeSpecsComponent
      },
      {
        path: 'specs/:name/:id',
        component: PokeSpecsComponent
      },
      {
        path: 'regions',
        component: RegionsComponent,
      },
      {
        path: 'items',
        component: ItemsComponent
      },
      {
        path: 'item',
        component: ItemComponent
      },
      {
        path: 'other-teams',
        component: OtherTeamsComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class HomeRoutingModule {}