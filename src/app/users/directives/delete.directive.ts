import { UsersService } from './../users.service';
import {
  Directive,
  Input,
  Renderer2,
  OnInit,
  HostListener,
  ElementRef,
} from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Directive({
  selector: '[mofDelete]',
})
export class DeleteDirective implements OnInit {
  @Input('mofDelete') id: string;

  @HostListener('click', ['$event'])
  delete() {
    const confirmed = window.confirm('Are you Sure ?');
    if (confirmed) {
      this.usersService.deleteUser(this.id);
      this.toastr.info("Successfully deleted user", "Delete User")
    }
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
    this.rendrer.addClass(tagIcon, "fa-trash" );
    this.rendrer.addClass(tagIcon, "fa-2x" );
    this.rendrer.appendChild(this.hostElement.nativeElement , tagIcon);
    this.rendrer.setAttribute(this.hostElement.nativeElement,"title","delete this user")
  }
}
