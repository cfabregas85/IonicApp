import { NgModule } from '@angular/core';
import { FilterdonePipe } from './filterdone.pipe';


@NgModule({
  declarations: [FilterdonePipe], 
  exports: [FilterdonePipe]
})
export class PipesModule { }
