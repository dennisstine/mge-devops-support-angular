import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { ServersComponent } from "./servers.component";
import { DevelopmentComponent } from './development/development.component';
import { TestComponent } from './test/test.component';
import { ProductionComponent } from './production/production.component';
import { FentonComponent } from './fenton/fenton.component';
import { DevopsComponent } from './devops/devops.component';

import { MaterialImportsModule } from "../common/imports/material-imports.module";
import { FontawesomeImportsModule } from "../common/imports/fontawesome-imports.module";
import { ServersRoutingModule } from "./servers-routing.module";

@NgModule({
  declarations: [
    ServersComponent,
    DevelopmentComponent,
    TestComponent,
    ProductionComponent,
    FentonComponent,
    DevopsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialImportsModule,
    FontawesomeImportsModule,
    ServersRoutingModule
  ]
})
export class ServersModule { }
