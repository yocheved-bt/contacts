import { UsersService } from './../users.service';
import { Directive, Input, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Directive({
  selector: '[mofAdd]',
})
export class AddDirective implements OnInit {

  @Input('mofAdd') id: string;

  @HostListener('click', ['$event'])
  addUser() {
    this.usersService.addUser(this.id);
    this.disabledBtn();
    this.toastr.info("Added user to your contacts", "Add User")
  }
  constructor(private usersService: UsersService,
              private hostElement: ElementRef,
              private rendrer: Renderer2,
              private toastr: ToastrService) {}

  ngOnInit(): void {
    this.addIcon();

  }

  addIcon(){
    const tagIcon = this.rendrer.createElement('i');
    this.rendrer.addClass(tagIcon, "fa" );
    this.rendrer.addClass(tagIcon, "fa-user-plus" );
    this.rendrer.addClass(tagIcon, "fa-2x" );
    this.rendrer.appendChild(this.hostElement.nativeElement , tagIcon);
    this.rendrer.setAttribute(this.hostElement.nativeElement,"title","Add user to my contacts")

  }
  disabledBtn(){
    this.rendrer.addClass(this.hostElement.nativeElement, "disabled" );
    this.rendrer.setAttribute(this.hostElement.nativeElement,"title","You alredy added this user");
  }
}
