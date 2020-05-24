import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mof-container',
  template: `
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
      .container{
        margin-top:3%;
      }
  `],
})
export class ContainerComponent {}
