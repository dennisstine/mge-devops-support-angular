import { Component } from '@angular/core';
import { mgeLinks } from "../../common/hyperlinks/mge-links";

@Component({
  selector: 'app-legacy',
  templateUrl: './legacy.component.html',
  styleUrls: ['./legacy.component.scss']
})
export class LegacyComponent {

  legacyJenkinsUrl = mgeLinks.legacyJenkinsUrl;
  legacyMercurialUrl = mgeLinks.legacyMercurialUrl;
  legacyOpengrokUrl = mgeLinks.legacyOpengrokUrl;
  legacyNexusUrl = mgeLinks.legacyNexusUrl;
}
