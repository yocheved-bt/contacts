import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mof-container',
  template: `
   <div class="container">
     <router-outlet></router-outlet>
    </div>
  `,
  styles: [
  ]
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
