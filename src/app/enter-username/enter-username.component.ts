import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-username',
  templateUrl: './enter-username.component.html',
  styleUrls: ['./enter-username.component.css'],
})
export class EnterUsernameComponent implements OnInit {
  UserName = '';
  EnteredUsers = [];
  IsEmpty = this.UserNameIsEmpty();
  DisplayUsers = 'Users added: \n';

  constructor() {}

  ngOnInit() {}

  ResetUserName() {
    this.DisplayUsers = 'Users added: \n';
    this.EnteredUsers.push(this.UserName);
    for (let i = 0; i < this.EnteredUsers.length; i++) {
      this.DisplayUsers = this.DisplayUsers + this.EnteredUsers[i] + '\n';
    }
    this.UserName = '';
  }

  OnEnteringInformation(event: any) {
    this.UserName = event.target.value;
  }

  UserNameIsEmpty(): boolean {
    return this.UserName === '';
  }

  UserNameExists(): boolean {
    return this.EnteredUsers.includes(this.UserName); //return if the username already exists in the list of added users
  }
}
