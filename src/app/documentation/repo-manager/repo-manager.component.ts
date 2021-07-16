import { Component } from '@angular/core';

import { m2Repository } from "../../common/interfaces/repos/m2-repository";

import m2LocalJson from '../../../assets/data/documentation/repo-manager/m2-local.json';
import m2RemoteJson from '../../../assets/data/documentation/repo-manager/m2-remote.json';
import m2VirtualJson from '../../../assets/data/documentation/repo-manager/m2-virtual.json';

import { mgeLinks } from "../../common/hyperlinks/mge-links";
import { documentationLinks } from "../../common/hyperlinks/documentation-links";

@Component({
  selector: 'app-repo-manager',
  templateUrl: './repo-manager.component.html',
  styleUrls: ['./repo-manager.component.scss']
})
export class RepoManagerComponent {

  displayedM2Columns = ['name', 'description', 'handles'];

  m2LocalData: m2Repository[] = m2LocalJson;
  m2RemoteData: m2Repository[] = m2RemoteJson;
  m2VirtualData: m2Repository[] = m2VirtualJson;

  mavenUrl = mgeLinks.mavenUrl;
  mavenDownloadUrl = mgeLinks.mavenDownloadUrl;
  mavenSettingsUrl = mgeLinks.mavenSettingsUrl;

  artifactoryTourUrl = documentationLinks.artifactoryTourVideoUrl;
}

