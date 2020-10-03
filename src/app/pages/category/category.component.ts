import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {}
  
  get CategoryList() {
    return this.categoryService.getAllCategory();
  
  }

}
