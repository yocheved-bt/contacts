import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mof-loading',
  template: `
    <div  *ngIf="isLoading">
    <div class="text-center">
    <div class="spinner-grow text-info" role="status"></div>
    <div class="spinner-grow text-info" role="status"></div>
    <div class="spinner-grow text-info" role="status"></div>
</div>
    </div>

  `,
  styles: [],
})
export class LoadingComponent {
  @Input() isLoading:boolean;
}
