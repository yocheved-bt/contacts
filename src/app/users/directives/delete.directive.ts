import {
  Directive,
  Input,
  Renderer2,
  OnInit,
  HostListener,
  ElementRef,
} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from './../users.service';

@Directive({
  selector: '[mofDelete]',
})
export class DeleteDirective implements OnInit {
  @Input('mofDelete') id: string;

  @HostListener('click', ['$event'])
  delete() {
    this.usersService.removeUser(this.id);
    this.toastr.info("Successfully removed user from your contacts", "Remove User");
  }

  constructor(
    private rendrer: Renderer2,
    private usersService: UsersService,
    private hostElement: ElementRef,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.addStyleIcon();
  }
  addStyleIcon() {
    const tagIcon = this.rendrer.createElement('i');
    this.rendrer.addClass(tagIcon, "fa" );
    this.rendrer.addClass(tagIcon, "fa-user-times" );
    this.rendrer.appendChild(this.hostElement.nativeElement , tagIcon);
    this.rendrer.setAttribute(this.hostElement.nativeElement,"title","delete this user")
  }
}
