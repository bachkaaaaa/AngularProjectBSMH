import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes=[
    {
      name:"ojja",
      ingrediens:"oil,eggs,onions,pepper,harrissa"
    },
    {
      name:"mlewi",
    ingrediens:"semoule,eggs,salami,harrissa"
  },
  {
    name:"brik",
    ingrediens:"farine,eggs,thon,olives"
  },
  {
    name:"couscous",
    ingrediens:"semoule,harissa,olive,meat"
  },
    ] ;
  recipe :any;
  constructor() {
    
   }

  ngOnInit() {
  }

}
