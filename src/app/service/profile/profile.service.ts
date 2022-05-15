import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Profile} from '../../model/profile';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) {
  }



  editProfile(id, profile){
    return this.http.post(`${API_URL}/profiles/${id}`, profile);

  }

  getProfileByUserId(id): Observable<Profile> {
    return this.http.get<Profile>(`${API_URL}/profiles/${id}`);
  }
}
