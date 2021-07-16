import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { PinchZoomModule } from "ngx-pinch-zoom";

import { DocumentationComponent } from "./documentation.component";
import { BuildPipelineComponent } from './build-pipeline/build-pipeline.component';
import { CiServerComponent } from './ci-server/ci-server.component';
import { RepoManagerComponent } from './repo-manager/repo-manager.component';
import { StaticAnalysisComponent } from "./static-analysis/static-analysis.component";
import { VersionControlComponent } from './version-control/version-control.component';
import { LanguagesComponent } from './languages/languages.component';

import { DocumentationRoutingModule } from "./documentation-routing.module";

import { MaterialImportsModule } from "../common/imports/material-imports.module";
import { FontawesomeImportsModule } from "../common/imports/fontawesome-imports.module";

@NgModule({
  declarations: [
    DocumentationComponent,
    CiServerComponent,
    BuildPipelineComponent,
    RepoManagerComponent,
    StaticAnalysisComponent,
    VersionControlComponent,
    LanguagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PinchZoomModule,
    MaterialImportsModule,
    FontawesomeImportsModule,
    DocumentationRoutingModule
  ]
})
export class DocumentationModule { }
