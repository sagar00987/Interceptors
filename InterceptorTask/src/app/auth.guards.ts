import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationInterceptor } from './AuthenticationInterceptor';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthenticationInterceptor, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}