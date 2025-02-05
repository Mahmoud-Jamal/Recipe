import { Component, ElementRef, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { log } from 'console';
import { ButtonComponent } from '../button/button.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ButtonComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
