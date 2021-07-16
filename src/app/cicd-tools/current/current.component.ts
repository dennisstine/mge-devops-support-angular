import { Component } from '@angular/core';
import { mgeLinks } from "../../common/hyperlinks/mge-links";

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent {

  jenkinsUrl = mgeLinks.jenkinsUrl;
  gitlabUrl = mgeLinks.gitlabUrl;
  opengrokUrl = mgeLinks.opengrokUrl;
  artifactoryUrl = mgeLinks.artifactoryUrl;
  sonarqubeUrl = mgeLinks.sonarqubeUrl
}
