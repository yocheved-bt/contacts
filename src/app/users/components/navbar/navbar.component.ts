import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'mof-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  routeData;

  constructor(private route: ActivatedRoute, private router: Router) {}

  getNavTitle() {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .forEach((e) => {
        this.routeData = this.route.root.firstChild.snapshot.data;
      });
  }

  ngOnInit(): void {
    this.getNavTitle();
  }
}
