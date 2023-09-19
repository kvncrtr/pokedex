import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HomeRoutingModule } from "./home-routing.module";
import { CustomTeamsModule } from "../custom-teams/custom-teams.module";

/* Materials */ 
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

/* Components */ 
import { CustomPaginatorIntl, PokemonComponent } from "./pokemon/pokemon.component";
import { HomeComponent } from "./home.component";
import { HomeBarComponent } from "./home-bar/home-bar.component";
import { ItemComponent } from "./items/item/item.component";
import { ItemsComponent } from "./items/items.component";
import { RegionsComponent } from "./regions/regions.component";
import { SearchBarComponent } from "src/app/shared/shared/search-bar/search-bar.component";
import { PokeCardComponent } from "src/app/shared/shared/poke-card/poke-card.component";
import { HotbarComponent } from "src/app/shared/shared/hotbar/hotbar.component";
import { PokeSpecsComponent } from "src/app/shared/shared/poke-specs/poke-specs.component";
import { OtherTeamsComponent } from "../other-teams/other-teams.component";
import { TeamComponent } from "../other-teams/team/team.component";
import { ProfileComponent } from "../profile/profile.component";

@NgModule({
   imports: [
      CommonModule,
      RouterModule,
      MatSlideToggleModule,
      MatPaginatorModule,
      HomeRoutingModule
   ],
   declarations: [
      HomeComponent,
      HotbarComponent,
      HomeBarComponent,
      ItemsComponent,
      ItemComponent,
      PokemonComponent,
      RegionsComponent, 
      SearchBarComponent,
      PokeCardComponent,
      OtherTeamsComponent,
      PokeSpecsComponent,
      TeamComponent,
      ProfileComponent      
   ],
   exports: [
      HomeComponent,
      HotbarComponent,
      HomeBarComponent,
      ItemsComponent,
      ItemComponent,
      PokemonComponent,
      RegionsComponent, 
      SearchBarComponent,
      MatPaginatorModule,
      PokeCardComponent,
      OtherTeamsComponent,
      PokeSpecsComponent,
      TeamComponent,
      ProfileComponent    
   ],
   providers: [
      { provide: MatPaginatorIntl, useClass: CustomPaginatorIntl }
   ]   
})
export class HomeModule {}