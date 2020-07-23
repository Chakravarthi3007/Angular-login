import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Output() onLogin = new EventEmitter<boolean>();

  user: UserModel = {
    username: '',
    pwd: '',
  };

  // ErrorMsg: string
  isError1 = false;
  isError2 = true;

  constructor() { }

  ngOnInit(): void { }

  onFormSubmission(loginPage: NgForm) {
    if (loginPage.valid) {
      this.isError2 = this.login(loginPage.value);
      this.isError2 = false;
      this.isError1 = false;
    } else {
      //this.login(loginPage.value);
      this.isError2 = true;
      this.isError1 = true;
    }
  }

  login(userData: UserModel): boolean {
    if (userData.username === 'admin' && userData.pwd === 'admin') {
      this.onLogin.emit(false);
      return false;
    } else {
      this.onLogin.emit(true);
      return true;
    }
  }
}
