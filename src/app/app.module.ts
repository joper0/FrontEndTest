import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';

import { UsersRepository } from './repository/users.repository';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [
    UsersRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
