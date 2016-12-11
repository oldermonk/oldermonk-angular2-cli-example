import {Component, OnInit, Input} from '@angular/core';
import {UserService} from "../../../common/services/user.service";
import {User} from "../../../common/models/user.model";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppStore} from "../../../common/models/appstore.model";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  private userList: Observable<Array<User>>;

  private selectedUser: User;

  constructor(private _store: Store<AppStore>, private _userService: UserService) {
    _store.select('selectedUser')
        .subscribe(user => this.selectedUser = user);
    this.userList = _store.select('users');
    _userService.loadUsers();
  }

  ngOnInit() {

  }

  selectUser(user): void {
    this._store.dispatch({type: 'SELECTED_USER', payload: user});
  }
}
