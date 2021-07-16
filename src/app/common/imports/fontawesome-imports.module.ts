import { NgModule } from "@angular/core";
import { FaIconLibrary, FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {faAws, faDocker, faJava, faNodeJs, faNpm} from "@fortawesome/free-brands-svg-icons";
import {
  faBezierCurve,
  faCheckSquare, faChevronDown, faChevronRight, faDownload,
  faEnvelopeOpenText, faExclamationTriangle, faExternalLinkAlt, faFileAlt, faIdCard, faInfoCircle, faListOl,
  faPhone, faQrcode, faQuestionCircle, faRandom,
  faServer, faSignInAlt,
  faToolbox,
  faTools, faUser, faUserFriends
} from "@fortawesome/free-solid-svg-icons";
import {faImage, faSquare} from "@fortawesome/free-regular-svg-icons";

@NgModule({
  declarations: [],
  imports: [
    FontAwesomeModule
  ],
  exports: [
    FontAwesomeModule
  ]
})
export class FontawesomeImportsModule {

  constructor(library: FaIconLibrary) {
    library.addIcons(faAws);
    library.addIcons(faBezierCurve);
    library.addIcons(faCheckSquare);
    library.addIcons(faChevronDown);
    library.addIcons(faChevronRight);
    library.addIcons(faDocker);
    library.addIcons(faEnvelopeOpenText);
    library.addIcons(faExclamationTriangle);
    library.addIcons(faExternalLinkAlt);
    library.addIcons(faFileAlt);
    library.addIcons(faDownload);
    library.addIcons(faIdCard);
    library.addIcons(faImage);
    library.addIcons(faInfoCircle);
    library.addIcons(faJava);
    library.addIcons(faListOl);
    library.addIcons(faNodeJs);
    library.addIcons(faNpm);
    library.addIcons(faPhone);
    library.addIcons(faQuestionCircle);
    library.addIcons(faQrcode);
    library.addIcons(faRandom);
    library.addIcons(faServer);
    library.addIcons(faSignInAlt);
    library.addIcons(faSquare);
    library.addIcons(faToolbox);
    library.addIcons(faTools);
    library.addIcons(faUser);
    library.addIcons(faUserFriends);
  }
}
