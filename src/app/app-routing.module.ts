import { UsersComponent } from './users/components/users.component';
import { ProfileComponent } from './users/components/profile.component';
import { MyContactsComponent } from './users/components/my-contacts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    component: UsersComponent,
    data: { title: 'Home' }
  },
  {
    path: 'my-contacts',
    component: MyContactsComponent,
    data: { title: 'My Contacts' }
  },
  {
    path: 'user/:id',
    component: ProfileComponent,
    data: { title: 'Profile' }

  },
  { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
