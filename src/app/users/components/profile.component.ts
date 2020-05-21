import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from './../users.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../uesr.model';

@Component({
  selector: 'mof-profile',
  template: `

<div *ngIf="user" class="container">
  <h3 class="title">{{user.name?.first}} {{user?.name?.last}}</h3>
  <div class="row">
    <div class="col-md-6 img">
    <img [src]="user?.picture?.large" [alt]="user?.name?.first"  class="img-rounded">
    </div>
    <div class="col-md-6 details">
      <blockquote>
        <h5>{{user?.name?.title}} {{user.name?.first}} {{user?.name?.last}}</h5>
        <i class="fa fa-map-marker padding"></i><i>{{user.location.city}}, {{user.location.state}}</i>
      </blockquote>
<div class="info">
      <b class="padding">Email:</b>{{user?.email}} <br>
      <b class="padding">Office number:</b> {{user?.phone}} <br>
      <b class="padding">Cell:</b> {{user?.cell}} <br>
      <b class="padding">Date of birth:</b> {{user?.dob.date | date: 'dd/MM/yyyy'}} <br>
      <b class="padding">Age:</b> {{user?.dob.age }} <br>
</div>
    </div>
  </div>
  <button (click)="navigate()" type="button" class="btn btn-primary">
    <i style="color:white" class="fa fa-arrow-circle-left fa-2x"></i><b class='button-txt'>All Contacts</b>
  </button>

</div>
  `,
  styles: [`
  .container{
    padding:5%;
}
.container .img{
    text-align:right;
    padding-right: 50px;
}
.details{
    border-left:3px solid #ded4da;
    padding-left:40px;
}
.details p{
    font-size:15px;
    font-weight:bold;

}
.button-txt{
  font-size: large;
  vertical-align:top;
  padding-left: 15px
}
.btn{
  margin-top:60px;
}
.info{
  margin-top:30px;
}
.name {
  padding-bottom: 15px;
}
.padding{
    padding-right:10px;
    padding-bottom:10px;
  }
  .img-rounded{
    width:250px;
  }
  .title{
    color:#555;
    text-align:center;
    padding-bottom:28px;
  }
  `]
})
export class ProfileComponent implements OnInit, OnDestroy{

  user_id:string;
  user:User;
  subscribe:Subscription;

  constructor(private userService:UsersService, private route:ActivatedRoute, private router:Router) { }
  getRouteParam() {
     this.subscribe = this.route.params.subscribe(params => {
      this.user_id = params['id'];
   });
  }
  ngOnInit(): void {
    this.getRouteParam();
    this.user = this.userService.getUserByID(this.user_id);
    this.isEmptyUser();
  }
  isEmptyUser(){
    if(!this.user){
      this.navigate()
    }
  }
  navigate(){
    this.router.navigate(['/home']);
  }
  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

}
