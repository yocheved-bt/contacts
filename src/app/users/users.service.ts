import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { User } from './uesr.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[] = [];
  myUsers: User[] = [];

  constructor(private http: HttpClient) {
    const subscribe = this.getUsers().subscribe(() => {
      subscribe.unsubscribe();
    });
    this.getMyUsers();
  }

  getUsers() {
    const url = 'https://randomuser.me/api/?results=300';

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http
      .get<User[]>(url, { headers })
      .pipe(
        map((users: User[]) => {
          users['results'].forEach((_user:User) => {
            this.users.push(_user);
          });
        })
      );
  }

  getMyUsers(){
        this.myUsers = JSON.parse(localStorage.getItem('myUsers')) || [];
    }

  // get user from users list
  getUserByID(id: string): User {
    return this.users.find((obj) => obj.login.salt === id) || null;
  }
  // find user from myUsers list
  findUser(id: string): boolean {
    if (this.myUsers.find((obj) => obj.login.salt === id)) {
      return true;
    } else {
      return false;
    }
  }

removeUser(id:string){
  this.myUsers.splice(
    this.myUsers.findIndex((item) => item.login.salt === id),1);
    localStorage.setItem(`myUsers`, JSON.stringify(this.myUsers));
}
  addUser(id: string) {
    const user: User = this.getUserByID(id);
    this.myUsers.push(user);
    localStorage.setItem(`myUsers`, JSON.stringify(this.myUsers));

  }
}
