import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServersComponent } from "./servers.component";
import { ProductionComponent } from "./production/production.component";
import { TestComponent } from "./test/test.component";
import { DevelopmentComponent } from "./development/development.component";
import { DevopsComponent } from "./devops/devops.component";
import { FentonComponent } from "./fenton/fenton.component";

const routes: Routes = [{
  path: '',
  component: ServersComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'production'
  }, {
    path: 'production',
    component: ProductionComponent
  }, {
    path: 'test',
    component: TestComponent
  }, {
    path: 'development',
    component: DevelopmentComponent
  }, {
    path: 'devops',
    component: DevopsComponent
  }, {
    path: 'fenton',
    component: FentonComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServersRoutingModule { }
