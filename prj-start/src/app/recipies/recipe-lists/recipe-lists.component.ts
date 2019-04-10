import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-lists',
  templateUrl: './recipe-lists.component.html',
  styleUrls: ['./recipe-lists.component.css']
})
export class RecipeListsComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'my description', 'https://images.101cookbooks.com/simple-sauteed-zucchini-recipe-h.jpg?w=680&auto=format'),
    new Recipe('A Test Recipe', 'my description', 'https://images.101cookbooks.com/simple-sauteed-zucchini-recipe-h.jpg?w=680&auto=format')
  ];

  constructor() { }

  ngOnInit() {
  }

}
