import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ButtonComponent } from './button/button.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
