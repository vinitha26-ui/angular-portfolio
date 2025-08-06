import { Component, OnInit } from '@angular/core';
import { NavService, NavLink } from 'src/app/services/services/nav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navLinks: NavLink[] = [];

  constructor(private navService: NavService) {}

  ngOnInit(): void {
    this.navService.getNavLinks().subscribe(data => {
      this.navLinks = data;
    });
  }
}
