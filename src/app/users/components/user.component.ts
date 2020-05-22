import { User } from '../uesr.model';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'mof-user',
  template: `
  <div class="user">
     <div class="row has-shadow">
      <div class="left-col col-lg-9 d-flex align-items-center justify-content-between">
        <div class="project-title d-flex align-items-center">
          <div class="image has-shadow"><img [src]="user?.picture?.thumbnail" [alt]="user?.name?.first" class="img-fluid"></div>
          <div class="text">
            <h3 [routerLink]="['/user', id]" class="name-title">{{user?.name?.title}} {{user?.name?.first}} {{user?.name?.last}}</h3>
             <div class="details text">
              <a href="mailto:{{ user?.email }}"> <i  class="fa fa-envelope padding"></i> <p>{{user?.email}}</p></a> |
               <i class="fa fa-phone padding"></i> <p>{{user?.cell}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="right-col col-lg-3 d-flex align-items-center">
      <a [routerLink]="['/user', id]"  title="view more details">
        <i class="fa fa-eye fa-2x"></i>
      </a>
      <a [mofDelete] = "id"></a>
      <a [mofAdd] = "id" ></a>
      </div>
    </div>
</div>
  `,
  styles: [`
  .user .row {
  margin: 0;
  padding: 15px 0;
  margin-bottom: 15px
}
.user div[class*='col-'] {
  border-right: 1px solid #eee
}
.user .text h3 {
  margin-bottom: 0;
  color: #555
}
.user .text small {
  color: #aaa;
  font-size: 0.75em
}
.user .image {
  max-width: 60px;
  min-width: 60px;
  height: 60px;
  margin-right: 15px
}
.has-shadow {
  -webkit-box-shadow: 2px 2px 2px rgba(0,0,0,0.1), -1px 0 2px rgba(0,0,0,0.05);
  box-shadow: 2px 2px 2px rgba(0,0,0,0.1), -1px 0 2px rgba(0,0,0,0.05);
}
@media (max-width: 991px) {
  .user .right-col {
      margin-top: 20px;
      margin-left: 65px
  }
}
.disabled{
  opacity: 0.5;
  cursor:not-allowed;
}
.name-title:hover {
  cursor: pointer;
  text-decoration: underline;
  outline: none;
}
.img-fluid{
width:60px;
}
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
export class UserComponent  implements OnInit {

  @Input() user:User;
  @Output()
  delete: EventEmitter<any> = new EventEmitter<any>();
  id:string;
  ngOnInit(): void {
    this.id = this.user.login.salt
  }
  // deleteUser(id){
  //   this.delete.emit(id);
  // }
  add(target){
    console.log(target);
  }

}
