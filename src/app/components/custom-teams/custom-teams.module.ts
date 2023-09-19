import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomTeamsRoutingModule } from './custom-teams-routing.module';

import { CustomTeamsComponent } from './custom-teams.component';
import { EditComponent } from './edit/edit.component';
import { EmptyPageComponent } from './empty-page/empty-page.component';
import { TeamViewComponent } from './team-view/team-view.component';
import { HomeModule } from '../home/home.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HomeModule,
    CustomTeamsRoutingModule,
  ],
  exports: [
    EditComponent,
    CustomTeamsComponent,
    EmptyPageComponent,
    TeamViewComponent,
  ],
  declarations: [
    EditComponent,
    CustomTeamsComponent,
    EmptyPageComponent,
    TeamViewComponent,
  ]
})
export class CustomTeamsModule { }
