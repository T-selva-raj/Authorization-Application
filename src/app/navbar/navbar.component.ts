import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) { }
  isOpen = false;
  
  ngOnInit(): void {
  }
  
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
