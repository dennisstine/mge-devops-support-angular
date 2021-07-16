import { Component } from '@angular/core';

import { WebServer } from '../../common/interfaces/servers/webserver';
import { SqlServer } from "../../common/interfaces/servers/sqlserver";

import prodTcJson from '../../../assets/data/servers/prod/tomcat.json';
import prodJbossJson from '../../../assets/data/servers/prod/jboss.json';
import prodApacheJson from '../../../assets/data/servers/prod/apache.json';
import prodSqlJson from '../../../assets/data/servers/prod/sql.json';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss']
})
export class ProductionComponent {

  displayedWebColumns: string[] = ['name', 'webserver', 'application', 'instance', 'az', 'ip', 'os'];
  displayedSqlColumns: string[] = ['name', 'sqlserver', 'application', 'instance', 'az', 'ip', 'os'];

  prodTomcatData: WebServer[] = prodTcJson;
  prodJbossData: WebServer[] = prodJbossJson;
  prodApacheData: WebServer[] = prodApacheJson;
  prodSqlData: SqlServer[] = prodSqlJson;
}
