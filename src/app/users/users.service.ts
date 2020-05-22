import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { User } from './uesr.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[] = [];
  myUsers:User[] = []

  constructor(private http: HttpClient) {
   const subscribe = this.getUsers().subscribe(() =>{
      subscribe.unsubscribe();
    });
  }

  getUsers() {
    const url = 'https://randomuser.me/api/?results=50';

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http
      .get<User[]>(url, { headers })
      .pipe(
        map((users:User[]) => {
          users['results'].forEach(_user => {
            this.users.push(_user);
          });

        }));
  }

  getUserByID(id:string):User{
    return this.users.find(obj =>obj.login.salt === id);
  }

  deleteUser(id:string){
    this.users.splice(this.users.findIndex(item => item.login.salt === id), 1)
    this.myUsers.splice(this.users.findIndex(item => item.login.salt === id), 1)

  }
  addUser(id:string){
   const user:User = this.getUserByID(id);
   this.myUsers.push(user);
  }
}
