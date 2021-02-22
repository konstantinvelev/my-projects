import { AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { delay, startWith } from 'rxjs/operators';
import { Helpers } from '../helpers/helpers';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  subscription: any = Subscription;
  authentication: boolean;

  constructor(private helpers: Helpers) {
    this.subscription = '';
    this.authentication = true;
  }

  ngAfterViewInit() {
    this.subscription = this.helpers.isAuthenticationChanged().pipe(
      startWith(this.helpers.isAuthenticated()),
      delay(0)).subscribe((value:any) =>
        this.authentication = value
      );
  }
  title = 'MyDiary';
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
