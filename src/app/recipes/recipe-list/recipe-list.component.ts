import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'this is a trt description',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUehekAyRfVnUnNO6qJZG3ZZcjkQLvYHX1smvfUb_bFXWCmHcwZw'
    ),
    new Recipe(
      'Test recipe',
      'this is a trt description',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUehekAyRfVnUnNO6qJZG3ZZcjkQLvYHX1smvfUb_bFXWCmHcwZw'
    ),
    new Recipe(
      'Test recipe',
      'this is a trt description',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUehekAyRfVnUnNO6qJZG3ZZcjkQLvYHX1smvfUb_bFXWCmHcwZw'
    )
  ];
  constructor() { }

  ngOnInit() {
  }

}
