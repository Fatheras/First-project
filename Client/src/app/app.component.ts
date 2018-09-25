import { Component } from '@angular/core';
import { IUser } from './models/User';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Client';
  url = 'http://localhost:3000/api/v1/user';
  users: IUser[];

  constructor(private userService: UserService) { }
  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe((users: IUser[]) => { console.log(this.users); });
  }
}


  /*
    getData() {
      this.http.get(this.url).subscribe((users: IUser[]) => { console.log(users); });
    } */

  /*const users = GetUsers();

  GetUsers: User[](){
    return this.http.get<User>('http://localhost:3000/api/v1/user')
  } */

  /*getUsers().subscribe(result => {
    users = result;
  }, error => console.error(error));

public getUsers(): Observable < any > {
  return this.http.get('http://localhost:3000/api/v1/user');
} */


