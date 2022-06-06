import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
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