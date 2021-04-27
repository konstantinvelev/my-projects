import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Helpers } from 'src/app/helpers/helpers';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private router: Router,
    private helpers:Helpers,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
  }

  register(): void{
    let authValues = {"Username":"pablo", "Password":"secret"};
    this.tokenService.auth(authValues).subscribe((token: any) =>{
      this.helpers.setToken(token);
      this.router.navigate(['/dashboard']);
    });
  }

}
