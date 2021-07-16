import { Component } from '@angular/core';

import { FlatTreeControl } from "@angular/cdk/tree";
import { MatTreeFlatDataSource, MatTreeFlattener } from "@angular/material/tree";

import { s3Bucket } from "../../common/interfaces/cloud/s3-bucket";

import s3Json from '../../../assets/data/cloud/s3/standard-buckets.json';


interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-s3',
  templateUrl: './s3.component.html',
  styleUrls: ['./s3.component.scss']
})
export class S3Component {

  private _transformer = (node: s3Bucket, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = s3Json;
  }

  hasChild = (_: number, node: FlatNode) => node.expandable;
}
