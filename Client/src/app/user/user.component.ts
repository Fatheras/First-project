import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/User';
import { UserService } from '../shared/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  url = 'http://localhost:3000/api/v1/';
  users: IUser[];
  user: IUser;
  id = 2;
  getUserForm: FormGroup;


  constructor(private userService: UserService) { }
  ngOnInit() {
    this.getUsers();
    this.getUserForm = this.createFormGroup();
  }
  createFormGroup() {
    return new FormGroup({
      id: new FormControl(''),
    });
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe((users: IUser[]) => { this.users = users; });
  }
  getUser(): void {
    this.userService.getUser(this.id)
      .subscribe((user: IUser) => { this.user = user; });
  }
}

