import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { UsersComponent } from './users/users.component';

const routes: Routes = [{
  path : 'users',
  component : UsersComponent,
  canActivate : [AuthGuard],
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
