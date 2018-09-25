import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './models/User';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000/api/v1/user';
  constructor(private http: HttpClient) {
    this.getUsers();
  }
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url);
  }
}
