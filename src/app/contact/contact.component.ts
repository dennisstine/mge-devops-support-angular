import { Component } from '@angular/core';
import { mgeLinks } from '../common/hyperlinks/mge-links';

import standardContactJson from '../../assets/data/contact/standard-contact-methods.json';
import elevatedContactJson from '../../assets/data/contact/elevated-contact-methods.json';

import { ContactMethod } from "../common/interfaces/contacts/contact-method";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  displayedColumns: string[] = ['method', 'purpose'];

  standardContactData: ContactMethod[] = this.getStandardContactJson(mgeLinks.bitsUrl, mgeLinks.devopsInboxMailTo);
  elevatedContactData: ContactMethod[] = this.getElevatedContactJson(mgeLinks.devopsInboxMailToUrgent, mgeLinks.downSwatLine);

  /**
   * Replaces the templated {{bitsUrl}} and {{devopsInbox}} in the raw json with the value from mge-links.ts
   * before passing the content to the frontend template in a contact-method.ts[].
   *
   * @param bitsUrl
   * @param devopsInboxMailTo
   */
  getStandardContactJson(bitsUrl: string, devopsInboxMailTo: string) {

    let templateJson = JSON.stringify(standardContactJson);

    let substitutedJson = templateJson.replace(/\{\{bitsUrl\}\}/g, bitsUrl)
      .replace(/\{\{devopsInbox\}\}/g, devopsInboxMailTo);

    return JSON.parse(substitutedJson);
  }

  /**
   * See getStandardContactJson()
   *
   * @param devopsInboxMailToUrgent
   */
  getElevatedContactJson(devopsInboxMailToUrgent: string, downSwatLine: string) {

    let templateJson = JSON.stringify(elevatedContactJson);

    let substitutedJson = templateJson.replace(/\{\{devopsInboxMailToUrgent\}\}/g, devopsInboxMailToUrgent)
      .replace(/\{\{downSwatLine\}\}/g, downSwatLine);

    return JSON.parse(substitutedJson);
  }
}

