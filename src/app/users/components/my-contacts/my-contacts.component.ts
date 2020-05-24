import { Component, OnInit, HostBinding } from '@angular/core';

import { UsersService } from '../../users.service';
import { User } from '../../uesr.model';

@Component({
  selector: 'mof-my-contacts',
  templateUrl: 'my-contacts.component.html',
  styleUrls: ['my-contacts.component.css']
})
export class MyContactsComponent implements OnInit {
  isValid;
  users: User[] = [];
  constructor(private UsersService: UsersService) {}

  ngOnInit(): void {
    this.users = this.UsersService.myUsers || null;
    if(this.users.length > 0){
      this.isValid = true
    }
    else
    this.isValid=false;
  }
  trackByFn(index: number, el: any): number {
    return el.id;
  }
  removeUser(){
    this.UsersService
  }

}
