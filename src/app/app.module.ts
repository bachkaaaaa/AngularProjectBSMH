import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { OverlayImgComponent } from './components/overlay-img/overlay-img.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SignupComponent } from './components/signup/signup.component';
import { TasksTableComponent } from './components/tasks-table/tasks-table.component';
import { CustomerHeaderComponent } from './components/customer-header/customer-header.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { OneRecipeComponent } from './components/one-recipe/one-recipe.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OverlayImgComponent,
    LoginComponent,
    SignupComponent,
    TasksTableComponent,
    CustomerHeaderComponent,
    RecipesListComponent,
    OneRecipeComponent,
    WelcomeComponent,
    RecipeCardComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
