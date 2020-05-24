import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../users.service';
import { User } from '../../uesr.model';

@Component({
  selector: 'mof-users',
  templateUrl: 'users.component.html',
  styles: [`
          .search-user {
            margin-bottom: 20px;
            margin-top: 30px;
            }
            .title{
              color: #555;
            }
    `,
  ],
})
export class UsersComponent implements OnInit {
  searchText: string;
  users: User[];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users = this.usersService.users;
  }

  trackByFn(index: number, el: any): number {
    return el.id;
  }
}
