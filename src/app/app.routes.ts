import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MealdetailsComponent } from './mealdetails/mealdetails.component';
import { CategoryComponent } from './category/category.component';
import { AllmealsComponent } from './allmeals/allmeals.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'home',
    children: [
      { path: '', component: AllmealsComponent, title: 'all' },
      { path: 'category/:cat', component: CategoryComponent },
    ],
  },
  { path: 'details/:id', component: MealdetailsComponent, title: 'details' },
  { path: '**', component: NotfoundComponent, title: 'notfound' },
];
