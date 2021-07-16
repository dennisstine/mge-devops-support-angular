import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CloudComponent } from "./cloud.component";
import { Ec2Component } from "./ec2/ec2.component";
import { S3Component } from "./s3/s3.component";
import { LambdaComponent } from "./lambda/lambda.component";
import { BeanstalkComponent } from "./beanstalk/beanstalk.component";
import { RdsComponent } from "./rds/rds.component";

const routes: Routes = [{
  path: '',
  component: CloudComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'ec2'
  }, {
    path: 'ec2',
    component: Ec2Component
  }, {
    path: 's3',
    component: S3Component
  }, {
    path: 'lambda',
    component: LambdaComponent
  }, {
    path: 'beanstalk',
    component: BeanstalkComponent
  }, {
    path: 'rds',
    component: RdsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CloudRoutingModule { }
