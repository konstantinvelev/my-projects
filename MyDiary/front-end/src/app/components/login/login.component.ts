import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';
import { Helpers } from '../../helpers/helpers';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private helpers: Helpers,
    private router: Router,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
  }

  submitLogin(data: any): void {
    let authValues = { "Username": "pablo", "Password": "secret" };
    this.tokenService.auth(authValues).subscribe((token: any) => {
      this.helpers.setToken(token);
      this.router.navigate(['/dashboard']);
    });
  }

  submitRegister(data: any): void {

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