import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../loginAuth/login.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router,private cookieservice:CookieService) { }

  ngOnInit(): void {
  }

  submitted = false;

  loginform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', [Validators.required])
  })

  login() {
    this.submitted = true;
    if (this.loginform.valid) {
      this.loginService.login(this.loginform.value).subscribe((res) => {
        if (res.error==false && res.token) {
          let expire = new Date();
          var time = Date.now() + 2 * 60 * 60 * 10000;
          expire.setTime(time);
          this.cookieservice.set('fhjsadhgvsd132vbjf@njnfe', res.token, expire)
          this.router.navigate(['main/dashboard'])
        } else if (res.error ==true) {
          Swal.fire('info',"Invalid email Id or Password", 'info')
        }
        else{
          Swal.fire('error','Something Went Wrong!', 'error')
        }
      })
    }
  }

}
