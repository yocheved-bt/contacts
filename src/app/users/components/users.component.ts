import { UsersService } from './../users.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../uesr.model';

@Component({
  selector: 'mof-users',
  template: `
    <div *ngIf="users$ | async as users; else loading">
      <section class="user no-padding-top">
        <div class="container">
          <div class="search-hero">
            <input
              class="form-control"
              type="text"
              name="search"
              [(ngModel)]="searchText"
              autocomplete="off"
              placeholder="Start searching"
            />
          </div>
          <mof-user
            *ngFor="let user of users | filter: searchText"
            [user]="user"
          ></mof-user>
        </div>
      </section>
    </div>

    <ng-template #loading>
      <mof-loading isLoading="loading"></mof-loading>
    </ng-template>
  `,
  styles: [``],
})
export class UsersComponent implements OnInit {
  searchText: string;
  users$: Observable<User[]>;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users$ = this.usersService.getUsers();
  }
}
