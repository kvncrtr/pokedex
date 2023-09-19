import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomTeamsComponent } from './custom-teams.component';
import { EditComponent } from './edit/edit.component';
import { EmptyPageComponent } from './empty-page/empty-page.component';
import { TeamViewComponent } from './team-view/team-view.component';

const routes: Routes = [
  {
    path: 'custom',
    component: CustomTeamsComponent,
    children: [
      {
        path: '',
        component: TeamViewComponent
      },
      {
        path: 'edit/:id/:name',
        component: EditComponent
      },
      {
        path: 'edit/create',
        component: EditComponent
      },
      {
        path: 'empty',
        component: EmptyPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomTeamsRoutingModule { }