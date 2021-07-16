import { Component } from '@angular/core';
import {TabItem} from "../common/interfaces/tabs/tabs";


@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent {

  tabs: TabItem[] = [{
    label: 'Jenkins',
    route: 'ci-server',
  }, {
    label: 'GitLab',
    route: 'version-control',
  }, {
    label: 'Artifactory',
    route: 'repo-manager',
  }, {
    label: 'SonarQube',
    route: 'static-analysis',
  }, {
    label: 'Build Pipeline',
    route: 'build-pipeline',
  }, {
    label: 'Languages',
    route: 'languages',
  }];

  activeLink = this.tabs[0];
}
