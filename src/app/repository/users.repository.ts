import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import { User } from '../models/user.model';

@Injectable()
export class UsersRepository {

  constructor(
    private http: Http,
  ) { }

  public listUsers(): Observable<Array<User>> {
    return this.http.get("https://jsonplaceholder.typicode.com/users")
      .map(response => response.json())
      .catch(error => error);
  }

}
