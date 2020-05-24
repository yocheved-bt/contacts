import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'mof-go-back',
  template: `
    <button (click)="goBack()" type="button" class="btn btn-primary">
    <i style="color:white" class="fa fa-arrow-circle-left fa-2x"></i><b class='button-txt'>Go back</b>
  </button>
  `,
  styles: [`
  .button-txt {
  font-size: large;
  vertical-align: top;
  padding-left: 15px;
}
.btn {
  margin-top: 60px;
}`
  ]
})
export class GoBackComponent {

  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }


}
