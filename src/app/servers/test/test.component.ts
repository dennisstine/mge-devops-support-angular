import { Component } from '@angular/core';
import { WebServer } from '../../common/interfaces/servers/webserver';
import { SqlServer } from "../../common/interfaces/servers/sqlserver";

import testTcJson from "../../../assets/data/servers/test/tomcat.json";
import testJbossJson from "../../../assets/data/servers/test/jboss.json";
import testApacheJson from "../../../assets/data/servers/test/apache.json";
import testSqlJson from "../../../assets/data/servers/test/sql.json";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  displayedWebColumns: string[] = ['name', 'webserver', 'application', 'instance', 'az', 'ip', 'os'];
  displayedSqlColumns: string[] = ['name', 'sqlserver', 'application', 'instance', 'az', 'ip', 'os'];

  testTomcatData: WebServer[] = testTcJson;
  testJbossData: WebServer[] = testJbossJson;
  testApacheData: WebServer[] = testApacheJson;
  testSqlData: SqlServer[] = testSqlJson;
}
