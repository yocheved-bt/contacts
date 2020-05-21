import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { UsersComponent } from './users/components/users.component';
import { UserComponent } from './users/components/user.component';
import { MyContactsComponent } from './users/components/my-contacts.component';
import { ProfileComponent } from './users/components/profile.component';
import { ContainerComponent } from './users/components/container.component';
import { SearchComponent } from './users/components/search.component';
import { NavbarComponent } from './users/components/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    MyContactsComponent,
    ProfileComponent,
    ContainerComponent,
    SearchComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}