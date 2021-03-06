import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { UsersComponent } from './users/components/users/users.component';
import { UserComponent } from './users/components/user/user.component';
import { MyContactsComponent } from './users/components/my-contacts/my-contacts.component';
import { ProfileComponent } from './users/components/profile/profile.component';
import { ContainerComponent } from './users/components/container.component';
import { NavbarComponent } from './users/components/navbar/navbar.component';
import { DeleteDirective } from './users/directives/delete.directive';
import { AddDirective } from './users/directives/add.directive';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    MyContactsComponent,
    ProfileComponent,
    ContainerComponent,
    NavbarComponent,
    DeleteDirective,
    AddDirective
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
