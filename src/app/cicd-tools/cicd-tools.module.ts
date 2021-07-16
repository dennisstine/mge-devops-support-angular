import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { CicdToolsComponent } from "./cicd-tools.component";
import { CurrentComponent } from './current/current.component';
import { LegacyComponent } from './legacy/legacy.component';
import { UpcomingComponent } from './upcoming/upcoming.component';

import { MaterialImportsModule } from "../common/imports/material-imports.module";
import { FontawesomeImportsModule } from "../common/imports/fontawesome-imports.module";
import { CicdToolsRoutingModule } from "./cicd-tools-routing.module";

@NgModule({
  declarations: [
    CicdToolsComponent,
    CurrentComponent,
    LegacyComponent,
    UpcomingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialImportsModule,
    FontawesomeImportsModule,
    CicdToolsRoutingModule
  ]
})
export class CicdToolsModule { }
