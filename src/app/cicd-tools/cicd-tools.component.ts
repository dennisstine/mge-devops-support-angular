import { Component } from '@angular/core';
import { TabItem } from "../common/interfaces/tabs/tabs";

@Component({
  selector: 'app-tools',
  templateUrl: './cicd-tools.component.html',
  styleUrls: ['./cicd-tools.component.scss']
})
export class CicdToolsComponent {

  tabs: TabItem[] = [{
    label: 'Current',
    route: 'current',
  }, {
    label: 'Legacy',
    route: 'legacy',
  }, {
    label: 'Upcoming',
    route: 'upcoming',
  }];

  activeLink = this.tabs[0];
}
