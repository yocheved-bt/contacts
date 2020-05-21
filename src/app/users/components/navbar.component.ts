import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'mof-navbar',
  template: `
<nav class="navbar navbar-expand-lg navbar-light bg-light static-top">
      <div class="container">
        <a class="navbar-brand" routerLink="/home" routerLinkActive="active">
          <img
            class="logo"
            src="assets/logo.png"
            alt="contacts"
            title="contacts" />
        </a> <b class="grey">Contacts</b>
        <button class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation">

        <span class="navbar-toggler-icon"></span>
    </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <h2 class="title">{{ routeData?.title }}</h2>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a routerLink="/home"
                 routerLinkActive="active"
                 class="nav-link">Home</a>
            </li>
            <li class="nav-item">
              <a
                routerLink="/my-contacts"
                routerLinkActive="active"
                class="nav-link">My Contacts</a>
            </li>
          </ul>
         </div>
      </div>
    </nav>
  `,
  styles: [`
  .logo{
    width: 50px;
}
.nav-item{
    cursor: pointer;
    outline:none;
}
.active{
    font-weight: bold;
}
.title{
  color: #555;
  margin-left:40%;
}
.grey{
  color: #999;
  font-size: large;
}
.nav-link{
  color: #555 !important;
}
  `],
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
