import { Component } from '@angular/core';
import { TabItem } from "../common/interfaces/tabs/tabs";
import { mgeLinks } from "../common/hyperlinks/mge-links";

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.scss']
})
export class CloudComponent {

  awsSsoUrl = mgeLinks.awsSsoUrl;

  tabs: TabItem[] = [{
    label: 'EC2',
    route: 'ec2',
  }, {
    label: 'S3',
    route: 's3',
  }, {
    label: 'Lambda',
    route: 'lambda',
  }, {
    label: 'Beanstalk',
    route: 'beanstalk',
  }, {
    label: 'RDS',
    route: 'rds',
  }];

  activeLink = this.tabs[0];
}
