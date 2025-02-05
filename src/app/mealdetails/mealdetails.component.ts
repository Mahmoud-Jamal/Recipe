import { DataService } from './../services/api/data.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
interface krkr {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: any;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
  strSource: string;
  strImageSource: any;
  strCreativeCommonsConfirmed: any;
  dateModified: any;
}

@Component({
  selector: 'app-mealdetails',
  imports: [],
  templateUrl: './mealdetails.component.html',
  styleUrl: './mealdetails.component.scss',
})
export class MealdetailsComponent {
  data: any;
  id: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}
  getDetails() {
    this.dataService.getDetailsById(this.id).subscribe({
      next: (res) => {
        this.data = res.meals[0];
        // console.log(this.data);
      },
    });
  }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe({
      next: (res) => {
        this.id = res.get('id');
        this.getDetails();
      },
    });
  }

  objectKeys(obj: any) {
    return Object.keys(obj);
  }
}
