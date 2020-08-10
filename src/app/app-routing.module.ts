import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { AdminDasboardComponent } from './admin-dasboard/admin-dasboard.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path : 'signup', component : RegisterComponent },
  { path : 'contact', component: ContactComponent},
  { path : 'admin', component: AdminDasboardComponent},
  { path : 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
