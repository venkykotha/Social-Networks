import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isMenuOpen: boolean = false;

  constructor() {}

  ngOnInit() {
    // Check and set the initial theme based on localStorage
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
      this.toggleDarkMode();
    }
  }

  toggleDarkMode() {
    this.isMenuOpen = !this.isMenuOpen;

    // Toggle the dark mode
    const body = document.body;
    const darkBtn = document.getElementById('dark-btn');

    if (body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme');
      darkBtn?.classList.remove('dark-btn-on');
      localStorage.setItem('theme', 'light');
    } else {
      body.classList.add('dark-theme');
      darkBtn?.classList.add('dark-btn-on');
      localStorage.setItem('theme', 'dark');
    }
  }
}
