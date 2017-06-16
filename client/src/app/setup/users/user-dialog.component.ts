import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdDialogRef } from '@angular/material';
import { User } from 'robocomp';

@Component({
  selector: 'user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {
  private _newUser = true;
  private _saving = false;
  public userForm: FormGroup;
  public user: User;

  constructor(
    private dialogRef: MdDialogRef<UserDialogComponent>,
    private formBuilder: FormBuilder
  ) { this.user = {canEdit: false, email: '', isAdmin: false, password: '', username: ''}; }

  save() {
    this._saving = true;
    if(this.userForm.dirty && this.userForm.valid) {
      this._newUser = this.userForm.value;
      this.dialogRef.close(this._newUser);
    }
  }

  editUser(user: User) {
    this.user = user;
    this._newUser = false;
  }

  buildForm() { 
    this.userForm = this.formBuilder.group({
      email: [this.user.email, Validators.required],
      password: '',
      isAdmin: '',
      canEdit: ''
    });
  }

  ngOnInit() {
    this.buildForm();
  }
}