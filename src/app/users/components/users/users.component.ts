import { UsersService } from '../../users.service';
import { Component, OnInit } from '@angular/core';
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
  //@ViewChild('user',{static:true}) user:User;
  searchText: string;
  users: User[];
  //fieldsFilter:any;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users = this.usersService.users;
   // this.fieldsFilter = [{'first': this.user?.name?.first},{'last':this.user?.name?.last}];
  }

  trackByFn(index: number, el: any): number {
    return el.id;
  }
}
