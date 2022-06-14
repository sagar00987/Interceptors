import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {



  canActivate() {
   if (localStorage.getItem('mytoken')) {
    
      return true;
    }  
    return false;  // return false if you wish to restrict access to user component 
  }
}
