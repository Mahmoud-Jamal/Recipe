import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from './../services/api/data.service';
interface man {
  strCategory: string;
}
@Component({
  selector: 'app-button',
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  selectedValue: string = '';
  data: man[] = [];
  constructor(private dataService: DataService, private router: Router) {}
  onSelectChange() {
    if (this.selectedValue) {
      // Navigate to the new URL with the selected value as a parameter
      this.router.navigate(['/category', this.selectedValue]);
    }
  }
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
