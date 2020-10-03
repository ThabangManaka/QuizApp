import { Injectable } from '@angular/core';
import { Category } from '../interface/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  _category: Array<Category>=[{Id:1,Name:"maths", ImgUrl: "https://miro.medium.com/max/6000/1*L76A5gL6176UbMgn7q4Ybg.jpeg", },
  {Id:2,Name:"Physical Science", ImgUrl:"https://www.studyguru.co.za/wp-content/uploads/2019/06/Science-Physics.jpg"},
  {Id:3,Name:"Life Science",ImgUrl:"https://cdn.technologynetworks.com/tn/images/thumbs/webp/640_360/life-science-technology-megatrends-shaping-our-future-324860.webp?v=10407417"},
  {Id:4,Name:"Geography",ImgUrl:"https://i1.wp.com/geoawesomeness.com/wp-content/uploads/2014/08/planet_earth.jpg?ssl=1"}
,]
  constructor() { }
  getAllCategory() {
    return this._category;
  }
}
