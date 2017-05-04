import { Component, OnInit, OnDestroy } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { User } from 'robocomp';
import { UserService } from '../../services';
import { SetupService } from '../../services';
import { UserDialogComponent } from './user-dialog.component';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  private _users: User[];
  private _error = '';
  private _subs = new Subscription();

  constructor (
    private userService: UserService,
    private setupService: SetupService,
    private dialog: MdDialog ) 
  { 
    this._users = [{canEdit: false, email: '', isAdmin: false, password: '', username: ''}];
  }

  newUser() {
    let dialogRef = this.dialog.open(UserDialogComponent);
    this._subs.add(dialogRef.afterClosed().subscribe(result => {
      // create new user
    }));
  }

  btnNew_Clicked() {
    this.newUser();
  }

  ngOnInit() {
    this.setupService.setupNav();

    this._subs.add(
      this.userService.getUsers()
        .subscribe(res => this._users = res , err => this.errorHandler(err))
    );
  }

  ngOnDestroy() {
    this._subs.unsubscribe();
  }

  errorHandler(error: any) {
    this._error = error.message || error;
  }
}
