import { Component, OnInit } from '@angular/core';
import { category } from '../category';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from './../services/category.service';
import {Category} from './../models';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[];

  constructor(
    private categoryService: CategoryService) { }



  ngOnInit(): void {
    this.getCategories();
  }


  getCategories(): void{
    const a = this.categoryService.getCategories();
    a.subscribe( res => {this.categories = res;});
  }

}
