import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading.component';
import { GoBackComponent } from './components/go-back.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [LoadingComponent, GoBackComponent, SearchPipe],
  imports: [
    CommonModule
  ],
  exports:[LoadingComponent, GoBackComponent, SearchPipe]
})
export class CoreModule { }
