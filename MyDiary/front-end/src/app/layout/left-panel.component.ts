import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Helpers } from '../helpers/helpers';
@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent {
  
  constructor(
    private helpers: Helpers,
    private router: Router
  ) { }

  logoutHandler():void {
    this.helpers.logout();
    this.router.navigate(['/login']);
  }
}