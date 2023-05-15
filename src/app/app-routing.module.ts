import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { FacebookComponent } from './facebook/facebook.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: '', component: FacebookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
