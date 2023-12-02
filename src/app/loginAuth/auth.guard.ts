import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router : Router,private cookieservice:CookieService){}

  canActivate() {
    if(this.cookieservice.get('fhjsadhgvsd132vbjf@njnfe')){
      return true
    }else{
      this.router.navigate([''])
      return false
    }
  }
  
}
