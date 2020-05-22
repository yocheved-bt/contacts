import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../uesr.model';
import { strict } from 'assert';

@Component({
  selector: 'mof-my-contacts',
  template: `
    <div class="container">
      <div class="row card-deck">
        <div
          *ngFor="let user of users; trackBy: trackByFn"
          class="col-lg-3 col-md-4 col-sm-6" >
          <div class="panel panel-default userlist">
            <div class="panel-body text-center">
              <div class="userprofile">
                <div class="userpic">
                  <img [src]="user?.picture?.thumbnail"
                       [alt]="user?.name?.first"
                       class="userpicimg"/>
                </div>
                <h3 class="username">
                  {{ user?.name?.title }} {{ user?.name?.first }} {{ user?.name?.last }}
                </h3>
                <p>{{ user.location.city }}, {{ user.location.state }}</p>
              </div>
              <a href="mailto:{{ user?.email }}">{{ user?.email }}</a> <br />
              <p>{{ user?.cell }}</p>
            </div>
            <div class="panel-footer">
              <a [mofDelete]="user.login.salt"></a>
              <a class="pull-right favorite">
                <i (click)="favorit(flag)"
                   [ngClass]="flag ? 'fa fa-heart fa-2x' : 'fa fa-heart-o fa-2x'"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
  </div>
  `,
  styles: [
    `
      .userprofile {
        width: 100%;
        float: left;
        clear: both;
        margin: 40px auto;
      }
      .userpic {
        height: 100px;
        width: 100px;
        clear: both;
        margin: 0 auto;
        display: block;
        border-radius: 100%;
        box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);
        -moz-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);
        -webkit-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);
        -ms-box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);
        position: relative;
      }
      .userpicimg {
        height: auto;
        width: 100%;
        border-radius: 100%;
      }
      .username {
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
        color: #000000;
        margin-top: 20px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .username + p {
        color: #607d8b;
        font-size: 13px;
        line-height: 15px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .favorite i {
        color: #eb3147;
      }
      .panel {
        box-shadow: 0px 2px 10px 0 rgba(0, 0, 0, 0.05);
        -moz-box-shadow: 0px 2px 10px 0 rgba(0, 0, 0, 0.05);
        -webkit-box-shadow: 0px 2px 10px 0 rgba(0, 0, 0, 0.05);
        -ms-box-shadow: 0px 2px 10px 0 rgba(0, 0, 0, 0.05);
        transition: all ease 0.5s;
        -moz-transition: all ease 0.5s;
        -webkit-transition: all ease 0.5s;
        -ms-transition: all ease 0.5s;
        margin-bottom: 35px;
        border-radius: 0px;
        position: relative;
        border: 0;
        display: inline-block;
        width: 100%;
      }

      .panel-footer {
        padding: 10px 15px;
        background-color: #ffffff;
        border-top: 1px solid #eef2f4;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
        color: #607d8b;
      }
      .fa-heart-empty {
        background-color: blue;
      }
    `,
  ],
})
export class MyContactsComponent implements OnInit {
  flag: boolean;
  users: User[] = [];
  constructor(private UsersService: UsersService) {}

  ngOnInit(): void {
    this.users = this.UsersService.myUsers;
    this.flag = false;
  }
  trackByFn(index: number, el: any): number {
    return el.id;
  }
  favorit(flag: boolean) {
    return (this.flag = !flag);
  }
}
