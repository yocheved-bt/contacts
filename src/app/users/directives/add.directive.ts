import { Directive, Input, OnInit, ElementRef, Renderer2, HostListener, DoCheck } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from './../users.service';

@Directive({
  selector: '[mofAdd]'
})
export class AddDirective implements OnInit, DoCheck {

  @Input('mofAdd') id: string;
  @HostListener('click', ['$event'])

  addUser() {
    this.usersService.addUser(this.id);
    this.disabledBtn();
    this.toastr.info("Added user to your contacts", "Add User");
  }

  constructor(private usersService: UsersService,
              private hostElement: ElementRef,
              private renderer: Renderer2,
              private toastr: ToastrService) {}

  ngOnInit(): void {
    this.addIcon();
  }
  ngDoCheck(): void {
    if( this.usersService.findUser(this.id) === true){
     this.disabledBtn();
    }
  }
  addIcon(){
    const tagIcon = this.renderer.createElement('i');
    this.renderer.addClass(tagIcon, "fa" );
    this.renderer.addClass(tagIcon, "fa-user-plus" );
    this.renderer.appendChild(this.hostElement.nativeElement , tagIcon);
    this.renderer.setAttribute(this.hostElement.nativeElement,"title","Add user to my contacts");
  }

  disabledBtn(){
    this.renderer.addClass(this.hostElement.nativeElement, "disabled" );
    this.renderer.setAttribute(this.hostElement.nativeElement,"title","You alredy added this user");
  }
}
