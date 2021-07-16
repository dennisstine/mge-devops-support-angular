import { Component } from '@angular/core';
import { mgeLinks } from "../common/hyperlinks/mge-links";

@Component({
  selector: 'app-external',
  templateUrl: './other-tools.component.html',
  styleUrls: ['./other-tools.component.scss']
})
export class OtherToolsComponent {

  sumoSsoUrl = mgeLinks.sumoSsoUrl;
  sumoUrl = mgeLinks.sumoUrl;
  pamUrl = mgeLinks.pamUrl;
  atlassianUrl = mgeLinks.atlassianUrl;
  nagiosIntUrl = mgeLinks.nagiosIntUrl;
  nagiosExtUrl = mgeLinks.nagiosExtUrl;
}
