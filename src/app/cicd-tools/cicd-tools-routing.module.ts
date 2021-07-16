import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CicdToolsComponent } from "./cicd-tools.component";
import { CurrentComponent } from "./current/current.component";
import { LegacyComponent } from "./legacy/legacy.component";
import { UpcomingComponent } from "./upcoming/upcoming.component";

const routes: Routes = [{
  path: '',
  component: CicdToolsComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'current'
  }, {
    path: 'current',
    component: CurrentComponent
  }, {
    path: 'legacy',
    component: LegacyComponent
  }, {
    path: 'upcoming',
    component: UpcomingComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CicdToolsRoutingModule { }
