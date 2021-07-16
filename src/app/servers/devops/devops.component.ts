import { Component } from '@angular/core';

import { WebServer } from "../../common/interfaces/servers/webserver";

import devopsJson from "../../../assets/data/servers/devops/devops.json";

@Component({
  selector: 'app-devops',
  templateUrl: './devops.component.html',
  styleUrls: ['./devops.component.scss']
})
export class DevopsComponent {

  displayedWebColumns: string[] = ['name', 'webserver', 'application', 'instance', 'az', 'ip', 'os'];

  devopsData: WebServer[] = devopsJson;
}
