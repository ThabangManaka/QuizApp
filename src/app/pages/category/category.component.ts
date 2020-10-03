import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

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
