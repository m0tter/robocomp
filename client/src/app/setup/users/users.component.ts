import { Component, OnInit, OnDestroy } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { User } from 'robocomp';
import { UserService } from '../../services';
import { SetupService } from '../../services';
import { UserDialogComponent } from './user-dialog.component';
import { Subscription } from 'rxjs/Subscription';

interface user extends User { selected?: boolean; }

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  private _users: user[];
  private _error = '';
  private _subs = new Subscription();
  private _editDisabled = true;
  private _deleteDisabled = true;

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
      if(result) {
        this.userService.newUser(result)
          .then(res => this._users.push(res))
          .catch(err => this._error = err);
      }
    }));
  }

  userSelected($index: number) {
    this._users[$index].selected = !this._users[$index].selected;
    this.checkButtons();
  }
  
  editUser() {
    // let user = this._users.find(e => e.selected);
    // let dialogRef = this.dialog.open(UserDialogComponent);
    // dialogRef.componentInstance.editUser({...user});

    // this._subs.add(dialogRef.afterClosed().subscribe(result => {
    //   if(result) {
    //     this.userService.editUser(result)
    //       .then(() => {
    //         result.selected = false;
    //         this._users.splice( this._users.indexOf(user), 1, result);
    //         this.checkButtons();
    //       })
    //       .catch( err => this.errorHandler(err) );
    //   }
    // }));
  }

  checkButtons() {
    let counter = 0;
    for(let u of this._users ) {
      if( u.selected ) counter++;
    }
    if(counter == 1) this._editDisabled = false; else this._editDisabled = true;
    if(counter > 0 ) this._deleteDisabled = false; else this._deleteDisabled = true;
  }

  btnEdit_Clicked() {
    this.editUser();
  }

  btnNew_Clicked() {
    this.newUser();
  }

  ngOnInit() {
    this.setupService.setupNav();
    this.userService.getUsers()
      .then(res => this._users = res)
      .catch(err => this.errorHandler(err));
  }

  ngOnDestroy() {
    this._subs.unsubscribe();
  }

  errorHandler(error: any) {
    this._error = error.message || error;
  }
}
