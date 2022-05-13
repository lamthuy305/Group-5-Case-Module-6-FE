import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Profile} from "../../model/profile";

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Profile[]> {
    return this.http.get<Profile[]>(`${API_URL}` + '/profile');
  }

  editProfile(id: number, profile:Profile): Observable<Profile> {
    return this.http.put(`${API_URL}/profile/${id}`, profile)

  }

  getProfileById(id):Observable<Profile> {
    return this.http.get<Profile>(`${API_URL}/profiles/${id}`);
  }
}
