import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CategoryComponent } from './category.component';



@NgModule({
  declarations: [],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
   RouterModule.forChild([{path:'', component: CategoryComponent}])
  ]
})
export class CategoryModule { }
