import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
/** 
  constructor(public jwtHelper: JwtHelperService) {}

  
  public isAuthenticated(): boolean {
    const Authtoken = localStorage.getItem('mytoken');
    // Check whether the token is expired and return
    // true or false
    console.log("AUTH TOKEN - ", Authtoken)
    if (Authtoken != undefined){
      return !this.jwtHelper.isTokenExpired(Authtoken);
    }
    else{
      return false
    }
     
  }  */

  intercept(
    request: HttpRequest<any>, next: HttpHandler
  ) : Observable<HttpEvent<any>> {
    const token = localStorage.getItem('mytoken');
   
    if (token) {
      request = request.clone({
          headers: request.headers.set(
            'Authorization',
            token
          )
      });
    }
    return next.handle(request);
  }


}