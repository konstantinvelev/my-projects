import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';
import { Helpers } from '../../helpers/helpers';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  get isAuthenticate():boolean{
    return this.helpers.isAuthenticated();
  }

  constructor(
    private helpers: Helpers,
    private router: Router,
    private tokenService: TokenService,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  submitLogin(data: any): void {
    this.tokenService.login(data).subscribe((token: any) => {
      this.helpers.setToken(token);
      //this.tokenService.getUserByEmail(data.email);
      this.router.navigate(['/home']);
    });
  }

  submitRegisterForm(data: any): void {
    this.tokenService.auth(data).subscribe((token: any) => {
      this.helpers.setToken(token);
      this.helpers.setUserInfo(data);
      this.router.navigate(['/home']);
    })
  }

  loginHandler() {
    toggleFrom('login');
  }

  registerHandler() {
    toggleFrom('register');
  }

}

function toggleFrom(page: string) {
  var selectorString = `${page}-form`
  var form = document.getElementById(selectorString)!;
  if (form.style.display === "none" || form.style.display === "") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
};