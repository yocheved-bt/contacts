import { UsersService } from './../users.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { User } from '../uesr.model';

@Component({
  selector: 'mof-users',
  template: `
    <div *ngIf=" users; else loading">
      <section class="user no-padding-top">
        <div class="container">
          <div class="search-user">
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
          *ngFor="let user of users | filter: searchText trackBy: trackByFn "
            [user]="user"
            class="example-item">
          </mof-user>
        </div>
      </section>
    </div>

    <ng-template #loading>
      <mof-loading isLoading="loading"></mof-loading>
    </ng-template>
  `,
  styles: [`
  .search-user{
    margin-bottom:20px;
    margin-top:30px;
  }
  `],
})
export class UsersComponent implements OnInit {

  searchText: string;
  users:User[];
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users = this.usersService.users;
  }

  trackByFn(index:number, el:any): number {
    return el.id;
  }
}
