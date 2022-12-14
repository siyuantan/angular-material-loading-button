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
  isNotifyClicked: boolean;
  className = 'notify-button';

  ngOnInit() {
    this.isNotifyClicked = false;
  }

  clicked() {
    if (!this.isNotifyClicked) {
      this.isNotifyClicked = !this.isNotifyClicked;
      this.className = 'notify-button loading';
    }
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
