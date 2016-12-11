import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http, Headers} from "@angular/http";
import {Store} from "@ngrx/store";
import {AppStore} from "../models/appstore.model";


const BASE_URL = 'http://localhost:3004/users/';
const HEADER = {headers: new Headers({'Content-Type': 'application/json'})};

@Injectable()
export class UserService {

  constructor(private http: Http, private store: Store<AppStore>) {
  }

  loadUsers(): void {
    this.http.get(BASE_URL)
      .map(res => res.json())
      .map(payload => ({type: 'ADD_USERS', payload}))
      .subscribe(action => this.store.dispatch(action));
  }

}
