import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from '../../users.service';
import { User } from '../../uesr.model';

@Component({
  selector: 'mof-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  user_id: string;
  user: User;
  subscribe: Subscription;

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  getRouteParam() {
    this.subscribe = this.route.params.subscribe((params) => {
      this.user_id = params['id'];
    });
  }
  ngOnInit(): void {
    this.getRouteParam();
    this.user = this.userService.getUserByID(this.user_id);

    if (!this.user) {
      this.router.navigate(['/contacts']);
    }
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
