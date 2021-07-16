import { Component } from '@angular/core';

import * as PermissionsMatrix from './permissions-matrix';

import anonymousJson from '../../../assets/data/documentation/cicd-server/permissions/anonymous.json';
import authenticatedJson from '../../../assets/data/documentation/cicd-server/permissions/authenticated.json';
import mgeAdminJson from '../../../assets/data/documentation/cicd-server/permissions/mge-admin.json';
import mgeDeployersJson from '../../../assets/data/documentation/cicd-server/permissions/mge-deployers.json';
import mgeDevelopersJson from '../../../assets/data/documentation/cicd-server/permissions/mge-developers.json';

@Component({
  selector: 'app-ci-server',
  templateUrl: './ci-server.component.html',
  styleUrls: ['./ci-server.component.scss']
})
export class CiServerComponent {

  columnIds: string[] = PermissionsMatrix.columnIds;

  headerGroupings: any[] = PermissionsMatrix.headerGroupings;
  headerGroupingsIds = PermissionsMatrix.headerGroupings.map(c => c.id);

  // makes the first column 'sticky' for x-axis overflow scrolling
  isSticky (column: string): boolean {
    return column === 'header-col-1' ? true : false;
  }

  anonymousData: any[] = anonymousJson;
  authenticatedData: any[] = authenticatedJson;
  adminData: any[] = mgeAdminJson;
  deployersData: any[] = mgeDeployersJson;
  developersData: any[] = mgeDevelopersJson;

  combinedData: any[] = this.anonymousData
    .concat(this.authenticatedData)
    .concat(this.adminData)
    .concat(this.deployersData)
    .concat(this.developersData);
}
