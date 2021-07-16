import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTableExporterModule } from 'mat-table-exporter';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatTreeModule } from "@angular/material/tree";

import { MdePopoverModule } from '@material-extended/mde';

const matModules = [
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatTableExporterModule,
  MatTabsModule,
  MatToolbarModule,
  MatTreeModule,
  MdePopoverModule
];

@NgModule({
  declarations: [],
  imports: [
    matModules
  ],
  exports: [
    matModules
  ]
})
export class MaterialImportsModule { }
