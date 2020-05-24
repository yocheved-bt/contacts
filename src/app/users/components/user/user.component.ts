import { User } from '../../uesr.model';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'mof-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css']
})
export class UserComponent  implements OnInit {

  @Input() user:User;
  id:string;

  ngOnInit(): void {
    this.id = this.user?.login.salt
  }

}
