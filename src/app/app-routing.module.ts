import { UsersComponent } from './users/components/users/users.component';
import { ProfileComponent } from './users/components/profile/profile.component';
import { MyContactsComponent } from './users/components/my-contacts/my-contacts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'contacts',
    component: UsersComponent,
    data: { title: 'Contacts' }
  },
  {
    path: 'my-contacts',
    component: MyContactsComponent,
    data: { title: 'My Contacts' }
  },
  {
    path: 'profile/:id',
    component: ProfileComponent,
    data: { title: 'Profile' }

  },
  { path: '',
      redirectTo: '/contacts',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
