import { Component } from '@angular/core';
import { TabItem } from "../common/interfaces/tabs/tabs";


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent {

  tabs: TabItem[] = [{
    label: 'Production',
    route: 'production',
  }, {
    label: 'Test',
    route: 'test',
  }, {
    label: 'Development',
    route: 'development',
  }, {
    label: 'DevOps',
    route: 'devops',
  }, {
    label: 'Fenton',
    route: 'fenton',
  }];

  activeLink = this.tabs[0];
}

