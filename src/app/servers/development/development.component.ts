import { Component } from '@angular/core';

import { WebServer } from '../../common/interfaces/servers/webserver';
import { SqlServer } from "../../common/interfaces/servers/sqlserver";

import devTcJson from "../../../assets/data/servers/dev/tomcat.json";
import devJbossJson from "../../../assets/data/servers/dev/jboss.json";
import devApacheJson from "../../../assets/data/servers/dev/apache.json";
import devSqlJson from "../../../assets/data/servers/dev/sql.json";

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss']
})
export class DevelopmentComponent {

  displayedWebColumns: string[] = ['name', 'webserver', 'application', 'instance', 'az', 'ip', 'os'];
  displayedSqlColumns: string[] = ['name', 'sqlserver', 'application', 'instance', 'az', 'ip', 'os'];

  devTomcatData: WebServer[] = devTcJson;
  devJbossData: WebServer[] = devJbossJson;
  devApacheData: WebServer[] = devApacheJson;
  devSqlData: SqlServer[] = devSqlJson;
}
