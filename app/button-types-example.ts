import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';

/**
 * @title Button varieties
 */
@Component({
  selector: 'button-types-example',
  templateUrl: 'button-types-example.html',
  styleUrls: ['button-types-example.css'],
})
export class ButtonTypesExample {
  isNotifyClicked = false;
  ngOnInit() {
    this.isNotifyClicked = false;
  }

  clicked() {
    this.isNotifyClicked = !this.isNotifyClicked;

    // to simulate pending API call
    // setTimeout(() => {
    //   this.isNotifyClicked = !this.isNotifyClicked;
    // }, 2000);
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
