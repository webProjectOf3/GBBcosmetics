import { Component, OnInit } from '@angular/core';
import { category } from '../category';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories = category;

  constructor() { }


  ngOnInit(): void {
  }

}
