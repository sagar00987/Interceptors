import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
//import { AuthenticationInterceptor } from './AuthenticationInterceptor';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

 // constructor(public auth: AuthenticationInterceptor) {}

  canActivate() {
   /**  if (!this.auth.isAuthenticated()) {
    
      return false;
    }  */
    return true;  // return false if you wish to restrict access to user component 
  }
}
