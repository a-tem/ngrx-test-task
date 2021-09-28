import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL } from "src/app/const/app.const";
import { IUser } from "src/app/models";

@Injectable()
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getUsersList(): Observable<IUser[]> {
    return <Observable<IUser[]>> this.httpClient.get(`${BASE_URL}/users`);
  }

  getUserById(userId: number): Observable<IUser> {
    return <Observable<IUser>> this.httpClient.get(`${BASE_URL}/users/${userId}`);
  }
}
