import { DataService } from './../services/api/data.service';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass, NgFor } from '@angular/common';
interface man {
  strCategory: string;
}
@Component({
  selector: 'app-button',
  imports: [RouterLink, RouterLinkActive, NgFor, NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  data: man[] = [];
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.getCategory().subscribe({
      next: (res) => {
        this.data = res.meals;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
