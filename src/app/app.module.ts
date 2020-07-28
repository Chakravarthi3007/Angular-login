import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, LoginComponent, ListComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
