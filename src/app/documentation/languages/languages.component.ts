import { Component } from '@angular/core';

import { language } from "../../common/interfaces/documentation/language";

import nodeJsJson from '../../../assets/data/documentation/languages/nodejs.json';
import javaJson from '../../../assets/data/documentation/languages/java.json';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent {

  displayedColumns = ['name', 'version', 'eol', 'notes'];

  nodeJsData: language[] = nodeJsJson;
  javaData: language[] = javaJson;
}
