import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { CloudComponent } from "./cloud.component";
import { BeanstalkComponent } from './beanstalk/beanstalk.component';
import { Ec2Component } from './ec2/ec2.component';
import { LambdaComponent } from './lambda/lambda.component';
import { RdsComponent } from './rds/rds.component';
import { S3Component } from './s3/s3.component';

import { MaterialImportsModule } from "../common/imports/material-imports.module";
import { FontawesomeImportsModule } from "../common/imports/fontawesome-imports.module";
import { CloudRoutingModule } from "./cloud-routing.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    CloudComponent,
    BeanstalkComponent,
    Ec2Component,
    LambdaComponent,
    RdsComponent,
    S3Component
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialImportsModule,
    FontAwesomeModule,
    CloudRoutingModule
  ]
})
export class CloudModule { }
