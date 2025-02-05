import { DataService } from './../services/api/data.service';
import { NgClass, NgFor } from '@angular/common';
import { ChangeDetectorRef, Component, SimpleChanges } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { get } from 'http';
interface ham {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}
@Component({
  selector: 'app-category',
  imports: [NgFor, NgClass, RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  data: ham[] = [];
  catg: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}
  getCategory() {
    this.dataService.getCategoryByName(this.catg).subscribe({
      next: (res) => {
        // console.log(res.meals);
        this.data = res.meals;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (res) => {
        this.catg = res.get('cat');
        console.log(this.catg);
        this.getCategory();
      },
    });
  }
}
