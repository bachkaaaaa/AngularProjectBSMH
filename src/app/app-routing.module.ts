import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipesListComponent} from "./components/recipes-list/recipes-list.component";
import { WelcomeComponent } from './components/welcome/welcome.component';
import { OneRecipeComponent } from './components/one-recipe/one-recipe.component';

const routes: Routes = [
  {
 path:'', component: WelcomeComponent},
 {
  path:'recipes', component: RecipesListComponent},
  {
    path:'recipe', component: OneRecipeComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
