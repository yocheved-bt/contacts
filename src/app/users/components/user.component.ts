import { User } from '../uesr.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mof-user',
  template: `
  <!-- {{user| json}} -->
  <div class="user">
     <div class="row bg-white has-shadow">
      <div class="left-col col-lg-6 d-flex align-items-center justify-content-between">
        <div class="project-title d-flex align-items-center">
          <div class="image has-shadow"><img [src]="user?.picture?.thumbnail" [alt]="user?.name?.first" class="img-fluid"></div>
          <div class="text">
            <h3 class="h4">{{user?.name?.title}} {{user?.name?.first}} {{user?.name?.last}}</h3>
             <div class="details text">
               <i class="fa fa-envelope padding"></i> <p>{{user?.email}}</p> |
               <i class="fa fa-phone padding"></i> <p>{{user?.cell}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="right-col col-lg-6 d-flex align-items-center">
      <a  [routerLink]="['/user', user?.login?.salt]" routerLinkActive="active" class="nav-link">
          <i style="margin-right:15px;color:#999;" class="fa fa-edit fa-2x icon"></i></a>
      <i class="fa fa-trash fa-2x" style="margin-right:15px; color:#999"></i>
      <a> <i style="margin-right:15px; color:#999;" class="fa fa-user-plus fa-2x icon"></i> </a>
        <!-- <div class="time"><i class="fa fa-clock-o" ></i>12:00 PM </div>
        <div class="comments"><i class="fa fa-comment-o"></i>20</div>
        <div class="project-progress">
          <div class="progress">
            <div role=" progressbar" style="width: 50%; height: 6px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" class="progress-bar bg-orange"></div>
          </div>
        </div> -->
      </div>
    </div>
</div>
  `,
  styles: [`
  .details{
    color: #555
  }
  .details p{
    display:inline-block;
    margin-right: 10px;
    margin-left:10px;
}
  }
  .details p:last-child{ border-right:none}
  .padding{
    padding-right:10px;
  }
  ` ]
})
export class UserComponent implements OnInit {

  @Input() user:User;

  constructor() { }

  ngOnInit(): void {
  }
  do(){

  }

}
