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

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
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
          return this.users;
        }));
  }

  getUserByID(id:string):User{
    return this.users.find(obj =>obj.login.salt === id);
  }
}
