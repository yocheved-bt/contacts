import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mof-loading',
  template: `
    <div  *ngIf="isLoading"  class="spinner-grow" role="status">
      <span class="sr-only">Loading...</span>
      <span class="sr-only">Loading...</span>

      <span class="sr-only">Loading...</span>

      <span class="sr-only">Loading...</span>

      <span class="sr-only">Loading...</span>

      <span class="sr-only">Loading...</span>
      <span class="sr-only">Loading...</span>
      <span class="sr-only">Loading...</span>
      <span class="sr-only">Loading...</span>
      <span class="sr-only">Loading...</span>
      <span class="sr-only">Loading...</span>
      <span class="sr-only">Loading...</span>
      <span class="sr-only">Loading...</span>
      <span class="sr-only">Loading...</span>
      <span class="sr-only">Loading...</span>
      <span class="sr-only">Loading...</span>
      <span class="sr-only">Loading...</span>
      <span class="sr-only">Loading...</span>
      <span class="sr-only">Loading...</span>
      <span class="sr-only">Loading...</span>

    </div>

  `,
  styles: [],
})
export class LoadingComponent {
  @Input() isLoading:boolean;
}
