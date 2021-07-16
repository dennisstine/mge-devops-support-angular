import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { OtherToolsComponent } from "./other-tools/other-tools.component";
import { EtcComponent } from "./etc/etc.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
  { path: '',   redirectTo: '/cicd-tools/current', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent},
  { path: 'other-tools', component: OtherToolsComponent },
  { path: 'etc', component: EtcComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cicd-tools', loadChildren: () => import(`./cicd-tools/cicd-tools.module`).then(m => m.CicdToolsModule) },
  { path: 'servers', loadChildren: () => import(`./servers/servers.module`).then(m => m.ServersModule) },
  { path: 'cloud', loadChildren: () => import('./cloud/cloud.module').then(m => m.CloudModule) },
  { path: 'docs', loadChildren: () => import('./documentation/documentation.module').then(m => m.DocumentationModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
