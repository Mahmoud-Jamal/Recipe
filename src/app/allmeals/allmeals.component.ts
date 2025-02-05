import { RouterLink } from '@angular/router';
import { DataService } from './../services/api/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-allmeals',
  imports: [RouterLink],
  templateUrl: './allmeals.component.html',
  styleUrl: './allmeals.component.scss',
})
export class AllmealsComponent {
  data: any;
  constructor(private dataService: DataService) {}
  getall() {
    this.dataService.getAll().subscribe({
      next: (res) => {
        this.data = res.meals;
        // console.log(this.data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  ngOnInit(): void {
    this.getall();
  }
}
