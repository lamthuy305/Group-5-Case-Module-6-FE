import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {User} from "../model/user";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  }

  login(user): Observable<User> {
    return this.http.post<User>(`${API_URL}/login`, user);
  }

  register(signUpForm): Observable<User> {
    return this.http.post<User>(`${API_URL}/register`,signUpForm);
  }

  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(`${API_URL}/users`)
  }
}
