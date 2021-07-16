import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FontawesomeImportsModule } from "./common/imports/fontawesome-imports.module";
import { MaterialImportsModule } from "./common/imports/material-imports.module";

import { ContactComponent } from './contact/contact.component';
import { OtherToolsComponent } from './other-tools/other-tools.component';
import { HomeComponent } from './home/home.component';
import { EtcComponent } from './etc/etc.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    OtherToolsComponent,
    // HomeComponent,
    EtcComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    FontawesomeImportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
