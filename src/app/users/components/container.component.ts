import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mof-container',
  template: `
    <div class="container contacts">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
  .contacts{
    margin-top:5%;
  }
  `],
})
export class ContainerComponent {}
