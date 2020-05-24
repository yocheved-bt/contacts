import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading.component';
import { GoBackComponent } from './components/go-back.component';



@NgModule({
  declarations: [LoadingComponent, GoBackComponent],
  imports: [
    CommonModule
  ],
  exports:[LoadingComponent, GoBackComponent]
})
export class CoreModule { }
