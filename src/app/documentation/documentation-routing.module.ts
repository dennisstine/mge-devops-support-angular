import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentationComponent } from "./documentation.component";
import { BuildPipelineComponent } from "./build-pipeline/build-pipeline.component";
import { CiServerComponent } from "./ci-server/ci-server.component";
import { VersionControlComponent } from "./version-control/version-control.component";
import { RepoManagerComponent } from "./repo-manager/repo-manager.component";
import { StaticAnalysisComponent } from "./static-analysis/static-analysis.component";
import { LanguagesComponent } from "./languages/languages.component";

const routes: Routes = [{
  path: '',
  component: DocumentationComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'ci-server'
  }, {
    path: 'ci-server',
    component: CiServerComponent
  }, {
    path: 'version-control',
    component: VersionControlComponent
  }, {
    path: 'repo-manager',
    component: RepoManagerComponent
  }, {
    path: 'static-analysis',
    component: StaticAnalysisComponent
  }, {
    path: 'build-pipeline',
    component: BuildPipelineComponent
  }, {
    path: 'languages',
    component: LanguagesComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule{ }
