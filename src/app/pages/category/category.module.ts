import { CategoryComponent } from './category.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   RouterModule.forChild([{path:'', component: CategoryComponent}])
  ]
})
export class CategoryModule { }
